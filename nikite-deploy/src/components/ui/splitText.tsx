import { useEffect, useState } from "react";
import { Unbounded } from "next/font/google"

const manrope = Unbounded({
    weight: '400',
    subsets: [ 'latin' ],
    variable: '--font-manrope',
})

interface CharacterColor {
    char: string;
    color: string;
}

interface SplitTextProps {
    text: string;
    className?: string;
    href?: string;
}

export const SplitText = ({ text, className = "", href }: SplitTextProps) => {
    const [chars, setChars] = useState<CharacterColor[]>(
        text.split("").map((char) => ({ char, color: "text-white" }))
    );
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateCharColors = () => {
            if (!text) return;

            const spans = document.querySelectorAll(`[data-text="${text}"] span`);
            if (!spans.length) return;

            const newChars = [...chars];
            let changed = false;

            spans.forEach((span, index) => {
                if (!span?.getBoundingClientRect || !newChars[index]) return;

                const rect = span.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;

                const elements = document.elementsFromPoint(x, y);
                if (!elements?.length) return;

                let backgroundColor = "rgba(0, 0, 0, 0)";
                for (const el of elements) {
                    if (!el || span.contains(el)) continue;

                    const style = window.getComputedStyle(el);
                    const bgColor = style?.backgroundColor;
                    const bgImage = style?.backgroundImage;

                    if (bgImage && bgImage !== "none") {
                        backgroundColor = "rgba(0, 0, 0, 1)";
                        break;
                    }

                    if (
                        bgColor &&
                        bgColor !== "rgba(0, 0, 0, 0)" &&
                        bgColor !== "transparent"
                    ) {
                        backgroundColor = bgColor;
                        break;
                    }
                }

                if (
                    backgroundColor === "rgba(0, 0, 0, 0)" ||
                    backgroundColor === "transparent"
                ) {
                    backgroundColor = "rgb(255, 255, 255)";
                }

                const rgb = backgroundColor.match(/\d+/g);
                if (!rgb?.length) return;

                const brightness =
                    (parseInt(rgb[0]) * 299 +
                        parseInt(rgb[1]) * 587 +
                        parseInt(rgb[2]) * 114) /
                    1000;

                const newColor = brightness > 128 ? "text-gray-800" : "text-white";
                if (newChars[index] && newChars[index].color !== newColor) {
                    newChars[index] = { ...newChars[index], color: newColor };
                    changed = true;
                }
            });

            if (changed) {
                setChars(newChars);
            }
        };

        const handleScroll = () => {
            requestAnimationFrame(updateCharColors);
        };

        const handleResize = () => {
            requestAnimationFrame(updateCharColors);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        const timer = setTimeout(updateCharColors, 100);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            clearTimeout(timer);
        };
    }, [chars, text]);

    const content = (
        <span
            data-text={text}
            className={`${className} relative group cursor-pointer`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
      {chars.map((char, index) => (
          <span
              key={index}
              className={`${
                  isHovered ? "text-[#FCA311]" : char.color
              } transition-colors duration-200 inline-block`}
          >
          {char.char}
        </span>
      ))}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FCA311] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </span>
    );

    if (href) {
        return (
            <a href={href} className="no-underline" style={manrope.style}>
                {content}
            </a>
        );
    }

    return content;
};
