Starter kit on `Next.js 14` with Static Site Generation (`SSG`) from `markdown` files configured for deployment on `GitHub Pages`.

A potential error in the browser console is nothing to worry about:

```
XHR GET https://YOUR_USERNAME.github.io/YOUR_REPONAME.txt?_rsc=8lxu9 [HTTP/2 404 247ms]
```

This occurs due to a peculiarity with GitHub Pages (if you are not using a CNAME). The repository configuration is set up in such a way that it accommodates both the specific requirements of GitHub Pages, where after the domain, it must include `/YOUR_REPONAME`, and the use of a custom domain where `/YOUR_REPONAME` is not required.
