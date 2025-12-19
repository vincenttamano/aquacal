"use client";
import React, { useState, useEffect, useRef } from "react";

export default function WebsiteDemo({ videoSrc = "", poster = "", title = "Website demo" }) {
    const [open, setOpen] = useState(false);
    const [videoAspect, setVideoAspect] = useState(16 / 9); // default aspect ratio
    const videoRef = useRef(null);

    const isYouTube = (src) => /youtube\.com|youtu\.be/.test(src);
    const isGoogleDrive = (src) => /drive\.google\.com/.test(src);

    // Convert Google Drive share link to direct download
    const convertGoogleDriveToDirect = (src) => {
        try {
            const idMatch = src.match(/\/d\/([a-zA-Z0-9_-]+)/);
            if (idMatch && idMatch[1]) {
                return `https://drive.google.com/uc?export=download&id=${idMatch[1]}`;
            }
        } catch (e) {}
        return src;
    };

    // Get the actual video URL
    const getVideoSource = () => {
        if (isYouTube(videoSrc)) {
            try {
                const url = new URL(videoSrc);
                if (url.hostname.includes("youtu.be")) {
                    return `https://www.youtube.com/embed/${url.pathname.slice(1)}?autoplay=1`;
                }
                const v = url.searchParams.get("v");
                if (v) return `https://www.youtube.com/embed/${v}?autoplay=1`;
            } catch (e) {}
            return videoSrc;
        } else if (isGoogleDrive(videoSrc)) {
            return convertGoogleDriveToDirect(videoSrc);
        }
        return videoSrc;
    };

    // Update aspect ratio when video metadata is loaded
    const onVideoLoaded = () => {
        if (videoRef.current) {
            setVideoAspect(videoRef.current.videoWidth / videoRef.current.videoHeight);
        }
    };

    const renderPoster = () => (
        <div
            onClick={() => videoSrc && setOpen(true)}
            role={videoSrc ? "button" : "img"}
            aria-label={title}
            style={{
                cursor: videoSrc ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 200,
                borderRadius: 8,
                border: "2px dashed #cfcfcf",
                background: poster ? `center/cover no-repeat url(${poster})` : "#fafafa",
                color: "#666",
                padding: 16,
                textAlign: "center",
            }}
        >
            <div style={{ backdropFilter: poster ? "blur(2px)" : "none" }}>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" style={{ display: "block", margin: "0 auto 8px" }}>
                    <path d="M5 3v18l15-9L5 3z" fill={videoSrc ? "#0070f3" : "#bbb"} />
                </svg>
                <div style={{ fontSize: 14 }}>
                    {videoSrc ? "Click to play demo" : "Placeholder — set videoSrc prop to show a demo video"}
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {renderPoster()}

            {open && videoSrc && (
                <div
                    role="dialog"
                    aria-label={title}
                    tabIndex={-1}
                    onClick={() => setOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0,0,0,0.6)",
                        zIndex: 1000,
                        padding: 20,
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "100%",
                            maxWidth: 980,
                            borderRadius: 8,
                            overflow: "hidden",
                            background: "#000",
                            aspectRatio: isYouTube(videoSrc) ? "16/9" : videoAspect, // dynamic aspect
                        }}
                    >
                        {isYouTube(videoSrc) ? (
                            <iframe
                                title={title}
                                src={getVideoSource()}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ width: "100%", height: "100%" }}
                            />
                        ) : (
                            <video
                                ref={videoRef}
                                src={getVideoSource()}
                                poster={poster}
                                controls
                                autoPlay
                                onLoadedMetadata={onVideoLoaded}
                                style={{ width: "100%", height: "100%" }}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
