FROM nginx:1.21.6

ENV APPDIR /usr/share/nginx/html
RUN mkdir -p $APPDIR 

RUN cat /etc/nginx/conf.d/default.conf

WORKDIR $APPDIR

ADD ../website/build /usr/share/nginx/html