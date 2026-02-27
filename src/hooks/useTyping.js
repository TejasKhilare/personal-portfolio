import { useEffect, useState } from "react";

export default function useTyping(words, speed = 85, pause = 1800) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = words[wi];

    const t = setTimeout(() => {
      if (!del) {
        setText(cur.slice(0, ci + 1));
        if (ci + 1 === cur.length) {
          setTimeout(() => setDel(true), pause);
        } else {
          setCi((c) => c + 1);
        }
      } else {
        setText(cur.slice(0, ci - 1));
        if (ci - 1 === 0) {
          setDel(false);
          setWi((w) => (w + 1) % words.length);
          setCi(0);
        } else {
          setCi((c) => c - 1);
        }
      }
    }, del ? speed / 2 : speed);

    return () => clearTimeout(t);
  }, [ci, del, wi]);

  return text;
}