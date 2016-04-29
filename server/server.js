var mosca=require('mosca');
var log=require('./log/log.js');

var pubSetting={
    type:'redis',
    redis:require('redis'),
    db:12,
    port:6379,
    return_buffers:true,
    host:'server-redis'
};

var setting={
    port:8080,
    backend:pubSetting,
    persistence:{
        factory:mosca.persistence.Redis
    }
};

var server=new mosca.Server(setting);

server.on('ready',log.up);
