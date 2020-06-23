'use strict';

if (hexo.config.use_webp) {
    hexo.extend.filter.register('after_render:html', require('./lib/process').webpProcess);
}