!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n={delay:Number(e.currentTarget.delay.value),step:Number(e.currentTarget.step.value),amount:Number(e.currentTarget.amount.value)},t=n.delay,o=n.step,i=n.amount,a=0;!function e(){var n,u;a<i&&(n=a+1,u=t+o*a,new Promise((function(e,t){setTimeout((function(){Math.random()>.3?e({position:n,delay:u}):t({position:n,delay:u})}),u)}))).then((function(e){var n=e.position,t=e.delay;r.Notify.success("Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("Rejected promise ".concat(n," in ").concat(t,"ms"))})).finally((function(){a++,e()}))}()}))}();
//# sourceMappingURL=03-promises.cd5c777f.js.map
