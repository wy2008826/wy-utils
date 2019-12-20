# wy-utils
常用的工具类整理

##### debonce
```
    import {debonce} from 'wy-utils';
    let log = debonce((...rest)=>{
        console.log(rest);
    },300);
    
    window.addEventListener('scroll',log);
    window.addEventListener('scroll',(e)=>{log(e,1,2,3)});
    
```


