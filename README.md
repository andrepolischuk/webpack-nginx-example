# webpack-nginx-example

> An example of enviroment with webpack and nginx

## Install

```sh
git clone https://github.com/andrepolischuk/webpack-nginx-example
cd webpack-nginx-example
```

Append the follow line into the `hosts` file:

```
0.0.0.0 awesome.app
```

Link nginx config and start:

```sh
ln -s $PWD/nginx.awesome.conf /usr/local/etc/nginx/servers/nginx.awesome.conf
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
