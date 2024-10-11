"use client";
import { getShortUrls, linkToShortAction } from "@/actions/link";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

export default function ShortUrlForm() {
  const [state, action] = useFormState(linkToShortAction, {
    message: null,
    error: null,
  });

  const [urls, setUrls] = useState([]);

  const formRef = useRef(null);
  useEffect(() => {
    const res = getShortUrls();
    const data = res.then((data) =>
      setUrls(
        data.map((obj) => {
          return { short: obj.short_url, long: obj.long_url };
        })
      )
    );
    setUrls(data);
    if (state?.message && state?.body) {
      toast.success(state.body);
      formRef.current.reset();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);
  return (
    <form ref={formRef} action={action}>
      <input type="text" name="long_url" placeholder="kısaltmak istediğin URL" />
      <button>Linki Kısalt</button>
      <p>{state?.message}</p>
      <ul>
        {urls.length > 0 &&
          urls.map((url) => (
            <li key={url.short}>
              <Link href={url.long}>{url.short}</Link>
            </li>
          ))}
      </ul>
    </form>
  );
}
