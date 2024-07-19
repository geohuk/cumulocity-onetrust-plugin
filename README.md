# Cumulocity OneTrust Integration

Plugin that extends Cumumulocity UIs to use OneTrust for cookie management.

### Prerequisites

1. [Node and NPM](https://nodejs.org/en/download)
2. c8ycli: `npm install -g @c8y/cli`

For more information refer to the [Web SDK Getting Started Guide](https://cumulocity.com/docs/web/gettingstarted/)

### Build & Deploy

```bash
npm run build
npm run deploy
```

### Running locally

```
c8ycli --url "https://<domain>" --shell <application>
```
* `domain` - the domain of the tenant that you are running against
* `application` - the application to be used, e.g. cockpit, devicemanagement, etc.