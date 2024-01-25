# Web Tools

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![GitHub Repo Stars](https://img.shields.io/github/stars/jaywcjlove/tools)]()
[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/tools?logo=docker)](https://hub.docker.com/r/wcjiang/tools)
[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/tools?logo=docker)](https://hub.docker.com/r/wcjiang/tools)
[![Docker Pulls](https://img.shields.io/docker/pulls/wcjiang/tools?logo=docker)](https://hub.docker.com/r/wcjiang/tools)

Many many useful Web Online Tools For Web Developers & Programmers. Online preview: https://jaywcjlove.github.io/tools

[![Get it on macOS](http://jaywcjlove.github.io/sb/download/macos.svg)](https://apps.apple.com/app/devhub/id6476452351)

[Docker](#docker) | [Desktop Application](#desktop-application)

[![Web Tools](https://user-images.githubusercontent.com/1680273/171790089-0d1f121a-1940-4d3f-b217-aaf4af4085a7.png)](https://jaywcjlove.github.io/tools)

[![Web Tools](https://user-images.githubusercontent.com/1680273/171790170-25f7c848-6602-4303-9194-f64d26b1c711.png)](https://jaywcjlove.github.io/tools)

## Desktop Application

[![Web Tools for Desktop Application](https://user-images.githubusercontent.com/1680273/175327359-f2e17eb5-26a6-407e-9d45-7af95952c9fb.png)](https://github.com/jaywcjlove/tools/releases)

## Docker

```bash
docker pull wcjiang/tools
```

```bash
docker run --name tools --rm -d -p 9666:3000 wcjiang/tools:latest
# Or
docker run --name tools -itd -p 9666:3000 wcjiang/tools:latest
# Or
docker run --name tools -it --rm -p 3000:3000 wcjiang/tools:latest
```

Visit the following URL in your browser

```bash
http://localhost:9666/
```

## Development

```bash
npm install       # Install dependencies
npm run hoist     # Packaged apps require it.

npm run build     # Build packages
npm run start
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/tools/graphs/contributors">
  <img src="https://jaywcjlove.github.io/tools/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
