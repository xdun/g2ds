// ==UserScript==
// @name         城通网盘跳转直链
// @author       NYY
// @description  城通网盘匹配跳转，配合PHP端接口使用
// @match        *://*.pipipan.com/fs/*
// @match        *://*.400gb.com/fs/*
// @match        *://*.ctdisk.com/fs/*
// @match        *://*.ctfile.com/fs/*
// @run-at       document-start
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';
    let link = parent.location.href;
    GM_openInTab('https://xjxy.com/ctdisk.php?url=' + link, { active: true });
    })();
    
