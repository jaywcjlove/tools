# Web Tools

[![GitHub Repo Stars](https://img.shields.io/github/stars/jaywcjlove/tools)]() [![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/tools?logo=docker)](https://hub.docker.com/r/wcjiang/tools) [![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/tools?logo=docker)](https://hub.docker.com/r/wcjiang/tools) [![Docker Pulls](https://img.shields.io/docker/pulls/wcjiang/tools?logo=docker)](https://hub.docker.com/r/wcjiang/tools)

Many many useful Web Online Tools For Web Developers & Programmers. Online preview: https://jaywcjlove.github.io/tools

[![Web Tools](https://user-images.githubusercontent.com/1680273/171790089-0d1f121a-1940-4d3f-b217-aaf4af4085a7.png)](https://jaywcjlove.github.io/tools)

[![Web Tools](https://user-images.githubusercontent.com/1680273/171790170-25f7c848-6602-4303-9194-f64d26b1c711.png)](https://jaywcjlove.github.io/tools)

## Docker

```bash
docker pull wcjiang/tools
```

```bash
docker run --name tools --rm -d -p 9666:80 wcjiang/tools:latest
# Or
docker run --name tools -itd -p 9666:80 wcjiang/tools:latest
```

Visit the following URL in your browser

```bash
http://localhost:9666/
```

## Development

```bash
npm install              # Install dependencies
npm install --workspaces # Install sub packages dependencies

npm run build            # Build packages
npm run start
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/html-tutorial/graphs/contributors">
  <img src="https://jaywcjlove.github.io/html-tutorial/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
