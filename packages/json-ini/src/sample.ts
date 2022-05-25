export const json = `{
  "app_mode": "development",
  "paths": {
    "data": "/home/git/grafana"
  },
  "server": {
    "protocol": "http",
    "http_port": "9999",
    "enforce_domain": true
  }
}`;

export const val = `# possible values : production, development
app_mode = development

[paths]
# Path to where grafana can store temp files, sessions, and the sqlite3 db (if that is used)
data = /home/git/grafana

[server]
# Protocol (http or https)
protocol = http

# The http port  to use
http_port = 9999

# Redirect to correct domain if host header does not match domain
# Prevents DNS rebinding attacks
enforce_domain = true`;
