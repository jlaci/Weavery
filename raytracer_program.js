var program = 'function calculate(t,i){function r(t,i){for(var r=2;r<arguments.length;r++)for(var e=0;e<arguments[r].length;e++)t[i++]=arguments[r].charAt(e)}function e(t){return String.fromCharCode(t>>8&255,255&t)}function o(t){return String.fromCharCode(t>>24&255,t>>16&255,t>>8&255,255&t)}function s(t){return String.fromCharCode(255&t,t>>8&255)}function n(){var t=Math.sqrt(y),i=p/t,r=_/t;return z=new b(i,r,256),h(),z.getBase64()}function h(){var t=new g,i=t.addObject(new l("Sphere 1",new a)),r=t.addObject(new l("Sphere 2",new a)),e=t.addObject(new l("Ground",new d(0,.5,-2,0,.5,-4,2,.5,-2))),o=t.addLight(new l("Light 1",new u)),s=t.addLight(new l("Light 2",new u)),n=t.addLight(new l("Light 3",new u));i.o.center.x=1,i.o.radius=.5,r.o.center.x=-1,r.o.radius=.5,o.o.center.set(4,-1,-2),s.o.center.set(-1,-1,-2),n.o.center.set(1,-6,-2),o.color.r=.5,o.color.g=.5,o.color.b=.5,s.color.r=.3,s.color.g=.3,s.color.b=.3,n.color.r=.4,n.color.g=.4,n.color.b=.4,i.color.r=1,i.color.g=.3,i.color.b=.3,i.specularity=.5,i.reflection=.1,r.color.r=.3,r.color.g=1,r.color.b=.3,r.specularity=.5,r.reflection=.1,e.color.r=.3,e.color.g=.3,e.color.b=.3,t.traceScene()}function f(t,i,r){0==arguments.length&&(t=i=r=0),this.x=t,this.y=i,this.z=r}function c(){this.origin=new f,this.direction=new f}function a(){this.type="sphere",this.center=new f,this.radius=1}function d(t,i,r,e,o,s,n,h,c){var a=t-e,d=i-o,u=r-s,l=t-n,g=i-h,z=r-c,b=d*z-u*g,p=u*l-a*z,_=a*g-d*l;this.normal=new f(b,p,_),this.d=-(b*t+p*i+_*r)}function u(){this.type="light",this.center=new f}function l(t,i){this.name=t,this.o=i,this.color={r:1,g:1,b:1},this.specularity=0,this.reflection=0}function g(){this.objects=[],this.lights=[]}var z,b=function(t,i,n){this.width=t,this.height=i,this.depth=n,this.pix_size=i*(t+1),this.data_size=2+this.pix_size+5*Math.floor((65534+this.pix_size)/65535)+4,this.ihdr_offs=0,this.ihdr_size=25,this.plte_offs=this.ihdr_offs+this.ihdr_size,this.plte_size=8+3*n+4,this.trns_offs=this.plte_offs+this.plte_size,this.trns_size=8+n+4,this.idat_offs=this.trns_offs+this.trns_size,this.idat_size=8+this.data_size+4,this.iend_offs=this.idat_offs+this.idat_size,this.iend_size=12,this.buffer_size=this.iend_offs+this.iend_size,this.buffer=new Array,this.palette=new Object,this.pindex=0;for(var h=new Array,f=0;f<this.buffer_size;f++)this.buffer[f]="\x00";r(this.buffer,this.ihdr_offs,o(this.ihdr_size-12),"IHDR",o(t),o(i),"\b"),r(this.buffer,this.plte_offs,o(this.plte_size-12),"PLTE"),r(this.buffer,this.trns_offs,o(this.trns_size-12),"tRNS"),r(this.buffer,this.idat_offs,o(this.idat_size-12),"IDAT"),r(this.buffer,this.iend_offs,o(this.iend_size-12),"IEND");var c=30912;c+=31-c%31,r(this.buffer,this.idat_offs+8,e(c));for(var f=0;(f<<16)-1<this.pix_size;f++){var a,d;f+65535<this.pix_size?(a=65535,d="\x00"):(a=this.pix_size-(f<<16)-f,d=""),r(this.buffer,this.idat_offs+8+2+(f<<16)+(f<<2),d,s(a),s(~a))}for(var f=0;256>f;f++){for(var u=f,l=0;8>l;l++)u=1&u?-306674912^u>>1&2147483647:u>>1&2147483647;h[f]=u}this.index=function(t,i){var r=i*(this.width+1)+t+1,e=this.idat_offs+8+2+5*Math.floor(r/65535+1)+r;return e},this.color=function(t,i,r,e){e=e>=0?e:255;var o=((e<<8|t)<<8|i)<<8|r;if("undefined"==typeof this.palette[o]){if(this.pindex==this.depth)return"\x00";var s=this.plte_offs+8+3*this.pindex;this.buffer[s+0]=String.fromCharCode(t),this.buffer[s+1]=String.fromCharCode(i),this.buffer[s+2]=String.fromCharCode(r),this.buffer[this.trns_offs+8+this.pindex]=String.fromCharCode(e),this.palette[o]=String.fromCharCode(this.pindex++)}return this.palette[o]},this.getBase64=function(){var t=this.getDump();if("undefined"!=typeof window.btoa&&null!==window.btoa)return window.btoa(t);var i,r,e,o,s,n,h,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c=t.length,a=0,d="";do i=t.charCodeAt(a),o=i>>2,r=t.charCodeAt(a+1),s=(3&i)<<4|r>>4,e=t.charCodeAt(a+2),n=a+2>c?64:(15&r)<<2|e>>6,h=a+3>c?64:63&e,d+=f.charAt(o)+f.charAt(s)+f.charAt(n)+f.charAt(h);while((a+=3)<c);return d},this.getDump=function(){function t(t,i,e){for(var s=-1,n=4;e-4>n;n+=1)s=h[255&(s^t[i+n].charCodeAt(0))]^s>>8&16777215;r(t,i+e-4,o(-1^s))}for(var i=65521,e=5552,s=1,n=0,f=e,c=0;c<this.height;c++)for(var a=-1;a<this.width;a++)s+=this.buffer[this.index(a,c)].charCodeAt(0),n+=s,0==(f-=1)&&(s%=i,n%=i,f=e);return s%=i,n%=i,r(this.buffer,this.idat_offs+this.idat_size-8,o(n<<16|s)),t(this.buffer,this.ihdr_offs,this.ihdr_size),t(this.buffer,this.plte_offs,this.plte_size),t(this.buffer,this.trns_offs,this.trns_size),t(this.buffer,this.idat_offs,this.idat_size),t(this.buffer,this.iend_offs,this.iend_size),"PNG\r\n\n"+this.buffer.join("")}},p=i.width,_=i.height,y=i.chunks;return f.prototype={set:function(t,i,r){this.x=t,this.y=i,this.z=r},magnitude:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},normalize:function(){var t=this.magnitude();return 0==t&&(t=1),this.x/=t,this.y/=t,this.z/=t,this}},a.prototype={normalToPoint:function(t,i,r){return t-=this.center.x,i-=this.center.y,r-=this.center.z,t/=this.radius,i/=this.radius,r/=this.radius,{x:t,y:i,z:r}},intersect:function(t){var i,r,e,o=+(1/0);i=this.center.x-t.origin.x,r=this.center.y-t.origin.y,e=this.center.z-t.origin.z;var s=i*i+r*r+e*e,n=i*t.direction.x+r*t.direction.y+e*t.direction.z,h=n*n-s+this.radius*this.radius,f=0;if(h>0){var c=Math.sqrt(h),a=n-c,d=n+c;d>0&&(0>a?o>d&&(o=d,f=-1):o>a&&(o=a,f=1))}return{type:f,dist:o}}},d.prototype={normalToPoint:function(t,i,r){return this.normal},intersect:function(t){var i=0,r=+(1/0),e=this.normal.x*t.direction.x+this.normal.y*t.direction.y+this.normal.z*t.direction.z;if(e){var o=this.normal.x*t.origin.x+this.normal.y*t.origin.y+this.normal.z*t.origin.z;r=-(o+this.d)/e,r>0&&(i=1)}return{type:i,dist:r}}},g.prototype={addObject:function(t){return this.objects.push(t),t},addLight:function(t){return this.lights.push(t),t},traceRay:function(t,i){for(var r=null,e={r:0,g:0,b:0},o=+(1/0),s=0;s<this.objects.length;s++){var n=this.objects[s],h=n.o.intersect(t);h.type&&(null==r||h.dist<o)&&(r=n,o=h.dist)}if(r){for(var f=t.origin.x+t.direction.x*o,a=t.origin.y+t.direction.y*o,d=t.origin.z+t.direction.z*o,u=r.o.normalToPoint(f,a,d),s=0;s<this.lights.length;s++){var l=this.lights[s],g=l.o.center.x-f,z=l.o.center.y-a,b=l.o.center.z-d,p=Math.sqrt(g*g+z*z+b*b);0==p&&(p=1),g/=p,z/=p,b/=p;var _=Math.sqrt((f-l.o.center.x)*(f-l.o.center.x)+(a-l.o.center.y)*(a-l.o.center.y)+(d-l.o.center.z)*(d-l.o.center.z)),y=new c;y.origin.set(f,a,d),y.origin.x+=g/1e3,y.origin.y+=z/1e3,y.origin.z+=b/1e3,y.direction.set(g,z,b);for(var x=!1,w=0;w<this.objects.length;w++){var n=this.objects[w],h=n.o.intersect(y);if(h.type&&h.dist<_){x=!0;break}}if(!x){var v=u.x*g+u.y*z+u.z*b;if(0>v&&(v=0),e.r+=v*r.color.r*l.color.r,e.g+=v*r.color.g*l.color.g,e.b+=v*r.color.b*l.color.b,r.specularity>0){var m=g-u.x*v*2,C=z-u.y*v*2,M=b-u.z*v*2,j=t.direction.x*m+t.direction.y*C+t.direction.z*M;if(j>0){var A=r.specularity;e.r+=l.color.r*A*Math.pow(j,64),e.g+=l.color.g*A*Math.pow(j,64),e.b+=l.color.b*A*Math.pow(j,64)}}if(r.reflection>0&&5>i){var S=new c,L=t.direction.x*u.x+t.direction.y*u.y+t.direction.z*u.z;S.origin.set(f,a,d),S.direction.set(t.direction.x-2*u.x*L,t.direction.y-2*u.y*L,t.direction.z-2*u.z*L),S.origin.x+=S.direction.x/1e3,S.origin.y+=S.direction.y/1e3,S.origin.z+=S.direction.z/1e3;var q=this.traceRay(S,i+1);e.r*=1-r.reflection,e.g*=1-r.reflection,e.b*=1-r.reflection,e.r+=q.color.r*r.reflection,e.g+=q.color.g*r.reflection,e.b+=q.color.b*r.reflection}}}e.r>1&&(e.r=1),e.g>1&&(e.g=1),e.b>1&&(e.b=1)}return{obj:r,color:e}},traceScene:function(){var i=new f(0,0,-4),r=new c;r.origin=i;for(var e=Math.sqrt(y),o=p/e,s=t%e*o,n=(t%e+1)*o,h=_/e,a=Math.floor(t/e)*h,d=(Math.floor(t/e)+1)*h,u=0,l=s;n>l;l++){for(var g=0,b=a;d>b;b++){r.direction.set((l-p/2)/100,(b-_/2)/100,4),r.direction.normalize();var x=this.traceRay(r,0),w=.9,v=Math.min(255,Math.pow(255*x.color.r,w)),m=Math.min(255,Math.pow(255*x.color.g,w)),C=Math.min(255,Math.pow(255*x.color.b,w)),M=z.color(v,m,C);z.buffer[z.index(u,g)]=M,g++}u++}}},n()}; return calculate(index, data);'
