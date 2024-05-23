Starter kit for `Next.js 14` with Static Site Generation (`SSG`) from `markdown` files, configured for deployment on `GitHub Pages`.

A potential error in the browser console is nothing to worry about:

```
XHR GET https://YOUR_USERNAME.github.io/YOUR_REPONAME.txt?_rsc=8lxu9 [HTTP/2 404 247ms]
```

This occurs due to a peculiarity with GitHub Pages (if you are not using a CNAME). The repository is configured to accommodate both the specific requirements of GitHub Pages, where the URL must include `/YOUR_REPONAME` after the domain, and the use of a custom domain where `/YOUR_REPONAME` is not required.
