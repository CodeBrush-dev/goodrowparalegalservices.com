// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.goodrowparalegalservices.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.goodrowparalegalservices.com/","title_tag":"Estate Planning West Linn | Goodrow Paralegal Services","meta_description":"Estate Planning West Linn with wills, trusts, powers of attorney, health care directives, real property transfers, and notary services. Affordable estate documents."},{"page_url":"https://www.goodrowparalegalservices.com/contact-9","title_tag":"Paralegal Services West Linn | Contact Goodrow","meta_description":"Contact Goodrow Paralegal Services West Linn for estate plan preparation, wills and trusts, powers of attorney, and notary services. Schedule your consultation today."}],"keywords":["Estate Planning West Linn","Paralegal Services West Linn","Wills and Trusts West Linn","Affordable Estate Documents","Notary Services West Linn","Powers of Attorney West Linn","Estate Plan Preparation","Real Property Transfer West Linn","Advance Health Care Directives","Probate Avoidance West Linn"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.goodrowparalegalservices.com/#localbusiness",
  "url": "https://www.goodrowparalegalservices.com/",
  "name": "Goodrow Paralegal Services",
  "description": "Goodrow Paralegal Services (formerly Pattillo Paralegal Services) provides affordable estate documents preparation and notary services in Oregon, including wills, trusts, powers of attorney, advance health care directives, and real property transfers into living trusts.",
  "image": [
    "https://static.wixstatic.com/media/11062b_072948185e7345dd91b126e009855d05~mv2_d_5963_3975_s_4_2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_072948185e7345dd91b126e009855d05~mv2_d_5963_3975_s_4_2.jpg",
    "https://static.wixstatic.com/media/eae752_69c2311676da4c9a9c571702e1b2d0c1~mv2.jpg/v1/fill/w_278,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4967_edited_edited.jpg",
    "https://static.wixstatic.com/media/eae752_d21ac808f7ba4fcda50ac84812eca8e3~mv2.jpg",
    "https://static.wixstatic.com/media/eae752_5b54654be9d2453daba5c8226e7d63ef~mv2.jpg/v1/crop/x_657,y_0,w_7279,h_5291/fill/w_377,h_274,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/eae752_5b54654be9d2453daba5c8226e7d63ef~mv2.jpg"
  ],
  "telephone": "+1-971-322-8802",
  "email": "LLGParalegal1984@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "West Linn",
    "addressRegion": "OR",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Oregon"
  },
  "sameAs": [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://twitter.com/",
    "https://www.tiktok.com/"
  ],
  "founder": {
    "@type": "Person",
    "name": "Laura Goodrow"
  },
  "serviceType": "Estate Documents Preparation and Notary Services",
  "services": [
    {
      "@type": "Service",
      "name": "Estate Documents Preparation",
      "description": "Preparation of comprehensive estate planning documents including wills, trusts, powers of attorney, and advance health care directives."
    },
    {
      "@type": "Service",
      "name": "Will Preparation",
      "description": "Preparation of last wills and testaments as part of an overall estate plan."
    },
    {
      "@type": "Service",
      "name": "Trust Preparation",
      "description": "Drafting and preparation of living trusts and related documents."
    },
    {
      "@type": "Service",
      "name": "Powers of Attorney",
      "description": "Preparation of financial and other powers of attorney documents."
    },
    {
      "@type": "Service",
      "name": "Advance Health Care Directives",
      "description": "Preparation of advance health care directives as part of an estate plan."
    },
    {
      "@type": "Service",
      "name": "Real Property Transfer to Trust",
      "description": "Transferring real property into a living trust as part of the estate planning process."
    },
    {
      "@type": "Service",
      "name": "Notary Services",
      "description": "Mobile notary services to notarize completed estate planning documents."
    }
  ],
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jill R."
      },
      "reviewBody": "Laura was so great to work with preparing my estate planning documents. I originally thought I needed a lawyer but I found Laura's post on Nextdoor that a paralegal could do the work at a much lower cost and gave her a call that day. Laura drove to meet me near my home and came back again to notarize the documents. Wonderful customer service! I highly recommend using Pattillo Paralegal Services for your estate planning needs."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Traci C."
      },
      "reviewBody": "Laura is amazing to work with. My husband and I needed to prepare our estate documents and didn't really know where to begin. I found Laura on a Next-door post. She responded to me quickly, answered all of our questions, pointed us in the right direction, did a ton of leg work for us, and helped us complete everything that we needed. And, is a notary to top it all off! I don't know why we put off doing this task for so long-she really made everything quite easy. She's very affordable and so pleasant to work with!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Elaine B."
      },
      "reviewBody": "She was extremely helpful helping us revise our will and trust. And that process can be emotional and nerve-wracking! Ms. Goodrow came to our home, which was helpful as we had multiple file boxes of material. She is experienced, organized, calm, pleasant to work with. I have no hesitation in highly recommending Ms. Goodrow."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
