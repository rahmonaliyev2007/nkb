import { useState, useEffect } from "react";

export default function CursorEffect() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div className="fixed top-0 -z-10 left-0 w-screen h-screen pointer-events-none">
            <div
                className="absolute w-40 h-40 rounded-full opacity-50 blur-3xl transition-transform duration-200 ease-out"
                style={{
                    transform: `translate(${position.x - 80}px, ${position.y - 80}px)`,
                    background: "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0.5) 80%)"
                }}
            />
        </div>
    );
}