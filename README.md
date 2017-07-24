# webpack-through-nginx-example

> An example of webpack through nginx

## Install

```sh
git clone https://github.com/andrepolischuk/webpack-through-nginx-example
cd webpack-through-nginx-example
```

Append the follow line into the `hosts` file:

```
0.0.0.0 awesome.app
```

Link nginx config and start:

```sh
ln -s $PWD/nginx-config /usr/local/etc/nginx/servers/nginx-config
sudo nginx
```

Install dependencies and run webpack:

```
cd login
npm install
npm start
```

Open `http://awesome.app/login/` in browser.

## License

MIT
