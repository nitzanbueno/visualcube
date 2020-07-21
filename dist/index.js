var e,n,r,t,i,o,u,c,a,s=require("react"),f=(e=s)&&"object"==typeof e&&"default"in e?e.default:e,l=require("react-native-svg");function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}!function(e){e.Black="#000000",e.DarkGray="#404040",e.Gray="#808080",e.Silver="#BFBFBF",e.White="#FFFFFF",e.Yellow="#FEFE00",e.Red="#EE0000",e.Orange="#FFA100",e.Blue="#0000F2",e.Green="#00D800",e.Purple="#A83DD9",e.Pink="#F33D7B",e.Transparent="transparent"}(o||(o={})),function(e){e.Black="black",e.DarkGray="darkGray",e.Gray="gray",e.Silver="silver",e.White="white",e.Yellow="yellow",e.Red="red",e.Orange="orange",e.Blue="blue",e.Green="green",e.Purple="purple",e.Pink="pink",e.Transparent="transparent"}(u||(u={})),function(e){e.Black="n",e.DarkGray="d",e.Gray="l",e.Silver="s",e.White="w",e.Yellow="y",e.Red="r",e.Orange="o",e.Blue="b",e.Green="g",e.Purple="m",e.Pink="p",e.Transparent="t"}(c||(c={})),function(e){e.Up="u",e.Down="d",e.Left="l",e.Right="r",e.Back="b",e.Front="f",e.Transparent="t",e.Oriented="o",e.Blank="n"}(a||(a={}));var p,k,L,b=((n={})[u.Black]=o.Black,n[u.DarkGray]=o.DarkGray,n[u.Gray]=o.Gray,n[u.Silver]=o.Silver,n[u.White]=o.White,n[u.Yellow]=o.Yellow,n[u.Red]=o.Red,n[u.Orange]=o.Orange,n[u.Blue]=o.Blue,n[u.Green]=o.Green,n[u.Purple]=o.Purple,n[u.Pink]=o.Pink,n),v=((r={})[c.Black]=o.Black,r[c.DarkGray]=o.DarkGray,r[c.Gray]=o.Gray,r[c.Silver]=o.Silver,r[c.White]=o.White,r[c.Yellow]=o.Yellow,r[c.Red]=o.Red,r[c.Orange]=o.Orange,r[c.Blue]=o.Blue,r[c.Green]=o.Green,r[c.Purple]=o.Purple,r[c.Pink]=o.Pink,r[c.Transparent]=o.Transparent,r),y={u:a.Up,f:a.Front,r:a.Right,d:a.Down,l:a.Left,b:a.Back,t:a.Transparent,o:a.Oriented,n:a.Blank},w=((t={})[a.Up]=0,t[a.Down]=3,t[a.Left]=4,t[a.Right]=1,t[a.Front]=2,t[a.Back]=5,t),d=((i={})[a.Oriented]=u.Gray,i[a.Blank]=o.DarkGray,i[a.Transparent]=u.Transparent,i);!function(e){e[e.U=0]="U",e[e.R=1]="R",e[e.F=2]="F",e[e.D=3]="D",e[e.L=4]="L",e[e.B=5]="B"}(L||(L={}));var F,C=[L.U,L.R,L.F,L.D,L.L,L.B],R=((p={})[L.U]=o.Yellow,p[L.R]=o.Red,p[L.F]=o.Blue,p[L.D]=o.White,p[L.L]=o.Orange,p[L.B]=o.Green,p);(k={})[L.U]=o.Blue,k[L.R]=o.Orange,k[L.F]=o.Green,k[L.D]=o.White,k[L.L]=o.Red,k[L.B]=o.Yellow,function(e){e.F="F",e.U="U",e.R="R",e.L="L",e.D="D",e.B="B",e.M="M",e.E="E",e.S="S",e.X="x",e.Y="y",e.Z="z"}(F||(F={}));var S,g,m,D,B={x:0,y:1,z:2},E=[F.F,F.U,F.R,F.L,F.D,F.B,F.M,F.E,F.S,F.X,F.Y,F.Z],z=[F.X,F.Y,F.Z];function O(e,n){return e.map(function(e,r){return e+n[r]})}function U(e,n){return e.map(function(e){return e*n})}function T(e,n,r){return O(U(O(e,n.map(function(e){return-e})),r),n)}function M(e,n,r){var t=[].concat(e);switch(n){case m.X:t[2]=e[2]*Math.cos(r)-e[1]*Math.sin(r),t[1]=e[2]*Math.sin(r)+e[1]*Math.cos(r);break;case m.Y:t[0]=e[0]*Math.cos(r)+e[2]*Math.sin(r),t[2]=-e[0]*Math.sin(r)+e[2]*Math.cos(r);break;case m.Z:t[0]=e[0]*Math.cos(r)-e[1]*Math.sin(r),t[1]=e[0]*Math.sin(r)+e[1]*Math.cos(r)}return t}function x(e,n,r,t){switch(e){case L.U:return[r,0,n-t];case L.R:return[n,t,r];case L.F:return[r,t,0];case L.D:return[r,n,t];case L.L:return[0,t,n-r];case L.B:return[n-r,t,n];default:throw new Error("Unknown cube face: '"+e+"'")}}function G(e){return/^[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/.exec(e)?"#"+e:v[e]?v[e]:b[e]?b[e]:o.Gray}!function(e){e.Clockwise="",e.CounterClockwise="'",e.Double="2"}(S||(S={})),function(e){e.FL="fl",e.F2L="f2l",e.LL="ll",e.CLL="cll",e.ELL="ell",e.OLL="oll",e.OCLL="ocll",e.OELL="oell",e.COLL="coll",e.OCELL="ocell",e.WV="wv",e.VH="vh",e.ELS="els",e.CLS="cls",e.CMLL="cmll",e.CROSS="cross",e.F2L3="f2l_3",e.F2L2="f2l_2",e.F2LSM="f2l_sm",e.F2L1="f2l_1",e.F2B="f2b",e.LINE="line"}(g||(g={})),function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(m||(m={}));var I=((D={})[L.U]=[0,-1,0],D[L.R]=[1,0,0],D[L.F]=[0,0,-1],D[L.D]=[0,1,1],D[L.L]=[-1,0,0],D[L.B]=[0,0,1],D);function P(e){return e.map(function(e){return e.join(",")}).join(" ")}var A=function(e){var n,r=e.options,t=void 0;return r.backgroundColor?n=r.backgroundColor:(n="none",t=0),f.createElement(l.Rect,h({},r.viewbox,{fill:n,fillOpacity:t}))};function W(e,n){return n[e][2]<-.105}var Y=function(e){return f.createElement(l.G,{opacity:e.options.cubeOpacity/100,strokeWidth:.1,strokeLinejoin:"round",children:e.children})},X=function(e){return f.createElement(l.G,{opacity:e.options.stickerOpacity/100,strokeOpacity:1,strokeWidth:.02,strokeLinejoin:"round",children:e.children})},j=function(e){return f.createElement(l.G,{opacity:1,strokeOpacity:1,strokeWidth:.12/e.cubeSize,strokeLinecap:"round",children:e.children})},Z=function(e){var n=e.face,r=e.options,t=n.length-1,i=r.outlineWidth;return f.createElement(l.Polygon,{fill:r.cubeColor,stroke:r.cubeColor,points:P([[n[0][0][0]*i,n[0][0][1]*i],[n[t][0][0]*i,n[t][0][1]*i],[n[t][t][0]*i,n[t][t][1]*i],[n[0][t][0]*i,n[0][t][1]*i]])})},V=function(e){for(var n=e.face,r=e.stickers,t=e.options,i=r.length-1,o=[],c=0;c<i;c++)for(var a=0;a<i;a++){var s=[(r[a][c][0]+r[a+1][c+1][0])/2,(r[a][c][1]+r[a+1][c+1][1])/2,0],p=T(r[a][c],s,.85),k=T(r[a+1][c],s,.85),L=T(r[a+1][c+1],s,.85),b=T(r[a][c+1],s,.85),v=N(n,c,a,t);v!==u.Transparent&&o.push(f.createElement(_,h({key:c+","+a},{p1:p,p2:k,p3:L,p4:b},{stickerColor:v,cubeColor:t.cubeColor})))}return f.createElement(l.G,{opacity:t.stickerOpacity/100,strokeOpacity:.5,strokeWidth:t.strokeWidth,strokeLinejoin:"round",children:o})},_=function(e){var n=e.p1,r=e.p2,t=e.p3,i=e.p4;return f.createElement(l.Polygon,{fill:e.stickerColor,stroke:e.cubeColor,points:P([[n[0],n[1]],[r[0],r[1]],[t[0],t[1]],[i[0],i[1]]])})};function N(e,n,r,t){var i=C.indexOf(e)*(t.cubeSize*t.cubeSize)+(n*t.cubeSize+r);if(!Array.isArray(t.facelets)&&Array.isArray(t.stickerColors))return t.stickerColors.length<=i?u.Black:t.stickerColors[i];if(Array.isArray(t.facelets)){if(t.facelets.length<=i)return o.DarkGray;var c=t.facelets[i];return null!=w[c]?t.colorScheme[w[c]]:d[c]||o.DarkGray}return t.colorScheme[e]||u.Black}var H,q,J,Q,K,$,ee,ne,re,te,ie,oe,ue,ce,ae,se,fe,le,he,pe,ke,Le,be,ve,ye,we,de,Fe,Ce,Re,Se=function(e){for(var n=e.face,r=e.stickers,t=e.rotations,i=e.options,o=[],c=U(t[n],0),a=U(t[n],.2),l=0;l<i.cubeSize;l++){var p=[(r[l][0][0]+r[l+1][1][0])/2,(r[l][0][1]+r[l+1][1][1])/2,0],k=O(T(r[l][0],p,.94),c),L=O(T(r[l+1][0],p,.94),c),b=O(T(r[l+1][1],p,.94),a),v=O(T(r[l][1],p,.94),a),y=N(n,0,l,i);y!==u.Transparent&&o.push(f.createElement(_,h({key:l},{p1:k,p2:L,p3:b,p4:v,stickerColor:y},{cubeColor:i.cubeColor})))}return f.createElement(s.Fragment,null,o)},ge=function(e){var n,r=e.geometry,t=e.arrow,i=r[0].length-1,o=Math.floor(t.s1.n/i),u=t.s1.n%i,c=[(r[t.s1.face][u][o][0]+r[t.s1.face][u+1][o+1][0])/2,(r[t.s1.face][u][o][1]+r[t.s1.face][u+1][o+1][1])/2,0],a=Math.floor(t.s2.n/i),h=t.s2.n%i,p=[(r[t.s1.face][h][a][0]+r[t.s1.face][h+1][a+1][0])/2,(r[t.s1.face][h][a][1]+r[t.s1.face][h+1][a+1][1])/2,0],k=[(c[0]+p[0])/2,(c[1]+p[1])/2,0];if(c=T(c,k,t.scale/10),p=T(p,k,t.scale/10),t.s3){var L=Math.floor(t.s3.n/i),b=t.s3.n%i;n=T(n=[(r[t.s1.face][b][L][0]+r[t.s1.face][b+1][L+1][0])/2,(r[t.s1.face][b][L][1]+r[t.s1.face][b+1][L+1][1])/2,0],k,t.influence/5)}var v=n||c,y=v[1]>p[1]?270:90;return p[0]-v[0]!=0&&(y=180*Math.atan((p[1]-v[1])/(p[0]-v[0]))/Math.PI,y=v[0]>p[0]?y+180:y),f.createElement(s.Fragment,null,f.createElement(l.Path,{d:"M "+c[0]+","+c[1]+" "+(n?"Q "+n[0]+","+n[1]:"L")+" "+p[0]+","+p[1],fill:"none",stroke:t.color,strokeOpacity:1}),f.createElement(l.Path,{d:"M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z",translate:[p[0],p[1]],scale:.033/i,rotation:y,fill:t.color,strokeWidth:0,strokeLinejoin:"round"}))},me=function(e){var n,r,t,i,u,c=e.geometry,a=e.options,h=function(e,n){return C.reduce(function(r,t){return n.forEach(function(n){r[t]||(r[t]=[].concat(e[t])),r[t]=M(r[t],n[0],Math.PI*n[1]/180)}),r},{})}(I,a.viewportRotations),p=function(e){return[].concat(C).sort(function(n,r){return e[r][2]-e[n][2]})}(h),k=p.filter(function(e){return!W(e,h)}),b=p.filter(function(e){return W(e,h)}),v=[];return Array.isArray(a.arrows)?v=a.arrows:"string"==typeof a.arrows&&(v="string"!=typeof(u=a.arrows)?[]:u.split(",").map(function(e){return function(e){if("string"!=typeof e)return null;var n=new RegExp("^(([URFDLB])([0-9]+))(([URFDLB])([0-9]+))(([URFDLB])([0-9]+))?(-s([0-9+]))?(-i([0-9+]))?(-(black|dgrey|grey|silver|white|yellow|red|orange|blue|green|purple|pink|[0-9a-fA-F]{6}|[0-9a-fA-F]{3}))?").exec(e);return n?{s1:{face:L[n[2]],n:parseInt(n[3])},s2:{face:L[n[5]],n:parseInt(n[6])},s3:n[7]?{face:L[n[8]],n:parseInt(n[9])}:void 0,color:n[15]?G(n[15]):o.Gray,scale:n[11]?parseInt(n[11]):10,influence:n[13]?parseInt(n[13]):10}:null}(e)}).filter(function(e){return!!e})),f.createElement(l.Svg,{width:a.width,height:a.height,viewBox:(n=a.viewbox.x,r=a.viewbox.y,t=a.viewbox.width,i=a.viewbox.height,n+" "+r+" "+t+" "+i)},f.createElement(A,{options:a}),a.cubeOpacity<100&&f.createElement(s.Fragment,null,f.createElement(Y,{options:a},k.map(function(e,n){return f.createElement(Z,{key:n,face:c[e],options:a})})),k.map(function(e,n){return f.createElement(V,{key:n,face:e,stickers:c[e],options:a})})),f.createElement(Y,{options:a},b.map(function(e,n){return f.createElement(Z,{key:n,face:c[e],options:a})})),b.map(function(e,n){return f.createElement(V,{key:n,face:e,stickers:c[e],options:a})}),"plan"===a.view&&f.createElement(X,{options:a},[L.R,L.F,L.L,L.B].map(function(e,n){return f.createElement(Se,{key:n,face:e,stickers:c[e],rotations:h,options:a})})),f.createElement(j,{cubeSize:c[0].length-1},v.map(function(e,n){return f.createElement(ge,{key:n,geometry:c,arrow:e})})))},De=((be={})[g.FL]=((H={})[L.U]=function(e,n,r){return!1},H[L.D]=function(e,n,r){return!0},H[L.R]=function(e,n,r){return e==r-1},H[L.L]=function(e,n,r){return e==r-1},H[L.F]=function(e,n,r){return e==r-1},H[L.B]=function(e,n,r){return e==r-1},H),be[g.F2L]=((q={})[L.U]=function(e,n,r){return!1},q[L.D]=function(e,n,r){return!0},q[L.R]=function(e,n,r){return e>0},q[L.L]=function(e,n,r){return e>0},q[L.F]=function(e,n,r){return e>0},q[L.B]=function(e,n,r){return e>0},q),be[g.LL]=((J={})[L.U]=function(e,n,r){return!0},J[L.D]=function(e,n,r){return!1},J[L.R]=function(e,n,r){return 0==e},J[L.L]=function(e,n,r){return 0==e},J[L.F]=function(e,n,r){return 0==e},J[L.B]=function(e,n,r){return 0==e},J),be[g.CLL]=((Q={})[L.U]=function(e,n,r){return e>0&&n>0&&e<r-1&&n<r-1||(0==e||e==r-1)&&(0==n||n==r-1)},Q[L.D]=function(e,n,r){return!1},Q[L.R]=function(e,n,r){return 0==e&&(0==n||n==r-1)},Q[L.L]=function(e,n,r){return 0==e&&(0==n||n==r-1)},Q[L.F]=function(e,n,r){return 0==e&&(0==n||n==r-1)},Q[L.B]=function(e,n,r){return 0==e&&(0==n||n==r-1)},Q),be[g.ELL]=((K={})[L.U]=function(e,n,r){return!!(0!=e&&e!=r-1||0!=n&&n!=r-1)},K[L.D]=function(e,n,r){return!1},K[L.R]=function(e,n,r){return 0==e&&n>0&&n<r-1},K[L.L]=function(e,n,r){return 0==e&&n>0&&n<r-1},K[L.F]=function(e,n,r){return 0==e&&n>0&&n<r-1},K[L.B]=function(e,n,r){return 0==e&&n>0&&n<r-1},K),be[g.OLL]=(($={})[L.U]=function(e,n,r){return!0},$[L.D]=function(e,n,r){return!1},$[L.R]=function(e,n,r){return!1},$[L.L]=function(e,n,r){return!1},$[L.F]=function(e,n,r){return!1},$[L.B]=function(e,n,r){return!1},$),be[g.OCLL]=((ee={})[L.U]=function(e,n,r){return e>0&&n>0&&e<r-1&&n<r-1||(0==e||e==r-1)&&(0==n||n==r-1)},ee[L.D]=function(e,n,r){return!1},ee[L.R]=function(e,n,r){return!1},ee[L.L]=function(e,n,r){return!1},ee[L.F]=function(e,n,r){return!1},ee[L.B]=function(e,n,r){return!1},ee),be[g.OELL]=((ne={})[L.U]=function(e,n,r){return!!(0!=e&&e!=r-1||0!=n&&n!=r-1)},ne[L.D]=function(e,n,r){return!1},ne[L.R]=function(e,n,r){return!1},ne[L.L]=function(e,n,r){return!1},ne[L.F]=function(e,n,r){return!1},ne[L.B]=function(e,n,r){return!1},ne),be[g.COLL]=((re={})[L.U]=function(e,n,r){return!0},re[L.D]=function(e,n,r){return!1},re[L.R]=function(e,n,r){return 0==e&&(0==n||n==r-1)},re[L.L]=function(e,n,r){return 0==e&&(0==n||n==r-1)},re[L.F]=function(e,n,r){return 0==e&&(0==n||n==r-1)},re[L.B]=function(e,n,r){return 0==e&&(0==n||n==r-1)},re),be[g.OCELL]=((te={})[L.U]=function(e,n,r){return!0},te[L.D]=function(e,n,r){return!1},te[L.R]=function(e,n,r){return 0==e&&n>0&&n<r-1},te[L.L]=function(e,n,r){return 0==e&&n>0&&n<r-1},te[L.F]=function(e,n,r){return 0==e&&n>0&&n<r-1},te[L.B]=function(e,n,r){return 0==e&&n>0&&n<r-1},te),be[g.WV]=((ie={})[L.U]=function(e,n,r){return!0},ie[L.D]=function(e,n,r){return!0},ie[L.R]=function(e,n,r){return e>0},ie[L.L]=function(e,n,r){return e>0},ie[L.F]=function(e,n,r){return e>0},ie[L.B]=function(e,n,r){return e>0},ie),be[g.VH]=((oe={})[L.U]=function(e,n,r){return!!(0!=e&&e!=r-1||0!=n&&n!=r-1)},oe[L.D]=function(e,n,r){return!0},oe[L.R]=function(e,n,r){return e>0},oe[L.L]=function(e,n,r){return e>0},oe[L.F]=function(e,n,r){return e>0},oe[L.B]=function(e,n,r){return e>0},oe),be[g.ELS]=((ue={})[L.U]=function(e,n,r){return!!(0!=e&&e!=r-1||0!=n&&n!=r-1)},ue[L.D]=function(e,n,r){return 0!=e||n<r-1},ue[L.R]=function(e,n,r){return e>0&&(e!=r-1||n>0)},ue[L.L]=function(e,n,r){return e>0},ue[L.F]=function(e,n,r){return e>0&&(e!=r-1||n<r-1)},ue[L.B]=function(e,n,r){return e>0},ue),be[g.CLS]=((ce={})[L.U]=function(e,n,r){return!0},ce[L.D]=function(e,n,r){return!0},ce[L.R]=function(e,n,r){return e>0},ce[L.L]=function(e,n,r){return e>0},ce[L.F]=function(e,n,r){return e>0},ce[L.B]=function(e,n,r){return e>0},ce),be[g.CMLL]=((ae={})[L.U]=function(e,n,r){return!(0!=e&&e!=r-1||0!=n&&n!=r-1)},ae[L.D]=function(e,n,r){return!0},ae[L.R]=function(e,n,r){return e>0||0==n||n==r-1},ae[L.L]=function(e,n,r){return e>0||0==n||n==r-1},ae[L.F]=function(e,n,r){return 0==n||n==r-1},ae[L.B]=function(e,n,r){return 0==n||n==r-1},ae),be[g.CROSS]=((se={})[L.U]=function(e,n,r){return!1},se[L.D]=function(e,n,r){return!!(0!=e&&e!=r-1||0!=n&&n!=r-1)},se[L.R]=function(e,n,r){return e>0&&n>0&&n<r-1},se[L.L]=function(e,n,r){return e>0&&n>0&&n<r-1},se[L.F]=function(e,n,r){return e>0&&n>0&&n<r-1},se[L.B]=function(e,n,r){return e>0&&n>0&&n<r-1},se),be[g.F2L3]=((fe={})[L.U]=function(e,n,r){return!1},fe[L.D]=function(e,n,r){return 0==e&&n==r-1||!!(0!=e&&e!=r-1||0!=n&&n!=r-1)},fe[L.R]=function(e,n,r){return e>0&&n<r-1},fe[L.L]=function(e,n,r){return e>0&&n>0&&n<r-1},fe[L.F]=function(e,n,r){return e>0&&n>0},fe[L.B]=function(e,n,r){return e>0&&n>0&&n<r-1},fe),be[g.F2L2]=((le={})[L.U]=function(e,n,r){return!1},le[L.D]=function(e,n,r){return e>0||n>0&&n<r-1},le[L.R]=function(e,n,r){return e>0&&n>0},le[L.L]=function(e,n,r){return e>0&&n<r-1},le[L.F]=function(e,n,r){return e>0&&n>0&&n<r-1},le[L.B]=function(e,n,r){return e>0},le),be[g.F2LSM]=((he={})[L.U]=function(e,n,r){return!1},he[L.D]=function(e,n,r){return!!(0!=e&&e!=r-1||0!=n&&n!=r-1)||0==n&&e==r-1||0==e&&n==r-1},he[L.R]=function(e,n,r){return e>0&&n<r-1},he[L.L]=function(e,n,r){return e>0&&n<r-1},he[L.F]=function(e,n,r){return e>0&&n>0},he[L.B]=function(e,n,r){return e>0&&n>0},he),be[g.F2L1]=((pe={})[L.U]=function(e,n,r){return!1},pe[L.D]=function(e,n,r){return 0!==e||n!==r-1},pe[L.R]=function(e,n,r){return e>0&&n>0},pe[L.L]=function(e,n,r){return e>0},pe[L.F]=function(e,n,r){return e>0&&n<r-1},pe[L.B]=function(e,n,r){return e>0},pe),be[g.F2B]=((ke={})[L.U]=function(e,n,r){return!1},ke[L.D]=function(e,n,r){return 0==n||n==r-1},ke[L.R]=function(e,n,r){return e>0},ke[L.L]=function(e,n,r){return e>0},ke[L.F]=function(e,n,r){return e>0&&(0==n||n==r-1)},ke[L.B]=function(e,n,r){return e>0&&(0==n||n==r-1)},ke),be[g.LINE]=((Le={})[L.U]=function(e,n,r){return!1},Le[L.D]=function(e,n,r){return n>0&&n<r-1},Le[L.R]=function(e,n,r){return!1},Le[L.L]=function(e,n,r){return!1},Le[L.F]=function(e,n,r){return e>0&&n>0&&n<r-1},Le[L.B]=function(e,n,r){return e>0&&n>0&&n<r-1},Le),be);!function(e){e[e.Clockwise=0]="Clockwise",e[e.CounterClockwise=1]="CounterClockwise",e[e.Double=2]="Double"}(Re||(Re={}));var Be,Ee=function(e,n){return e},ze=function(e,n){return e*n%(n*n+1)},Oe=function(e,n){return n*n+1-ze(e,n)},Ue=function(e,n){return n*n-e+1},Te=((ve={})[Re.Clockwise]=Re.CounterClockwise,ve[Re.CounterClockwise]=Re.Clockwise,ve[Re.Double]=Re.Double,ve),Me=((ye={})[m.X]=[L.U,L.B,L.F,L.D],ye[m.Y]=[L.L,L.B,L.R,L.F],ye[m.Z]=[L.L,L.U,L.R,L.D],(Ce={})[m.X]=((we={})[L.U]=Ee,we[L.B]=Ue,we[L.F]=Ee,we[L.D]=Ee,we[L.L]=null,we[L.R]=null,we),Ce[m.Y]=((de={})[L.U]=null,de[L.B]=ze,de[L.F]=ze,de[L.D]=null,de[L.L]=ze,de[L.R]=ze,de),Ce[m.Z]=((Fe={})[L.U]=ze,Fe[L.B]=null,Fe[L.F]=null,Fe[L.D]=Oe,Fe[L.L]=Ee,Fe[L.R]=Ue,Fe),Ce),xe=function(){function e(e,n){this.cubeSize=e,this.faces={},this.numStickers=this.cubeSize*this.cubeSize,this.clockwiseMapping=[],this.counterClockwiseMapping=[],this.doubleMapping=[],this.faces=n,this.faces||this.initValues();for(var r=1;r<=this.numStickers;r++)this.clockwiseMapping.push(Oe(r,e)),this.counterClockwiseMapping.push(ze(r,e)),this.doubleMapping.push(Ue(r,e))}var n=e.prototype;return n.initValues=function(){var e=this,n=1;C.forEach(function(r){e.faces[r]=[];for(var t=0;t<e.numStickers;t++)e.faces[r].push(n++)})},n.rotateFace=function(e,n){var r=this;switch(n){case Re.Clockwise:this.faces[e]=this.clockwiseMapping.map(function(n){return r.faces[e][n-1]});break;case Re.CounterClockwise:this.faces[e]=this.counterClockwiseMapping.map(function(n){return r.faces[e][n-1]});break;case Re.Double:this.faces[e].reverse()}},n.axisRotation=function(e,n,r,t,i,o){var u=this;void 0===i&&(i=!0),void 0===o&&(o=!1),i||t.reverse();for(var c=t.map(function(e){return u.faces[e].slice()}),a=0;a<this.cubeSize;a++)for(var s=0;s<n;s++)for(var f=this.cubeSize*a+(e+s),l=0;l<t.length;l++){var h=t[l],p=o?t[(l+2)%t.length]:t[(l+1)%t.length],k=Me[r][h](f+1,this.cubeSize)-1,L=Me[r][p](f+1,this.cubeSize)-1;this.faces[h][k]=c[(o?l+2:l+1)%c.length][L]}},n.xLayersRotation=function(e,n,r,t){void 0===n&&(n=!0),void 0===r&&(r=!1),void 0===t&&(t=1),this.axisRotation(e,t,m.X,[L.U,L.F,L.D,L.B],n,r)},n.yLayersRotation=function(e,n,r,t){void 0===n&&(n=!0),void 0===r&&(r=!1),void 0===t&&(t=1),this.axisRotation(e,t,m.Y,[L.L,L.F,L.R,L.B],n,r)},n.zLayersRotation=function(e,n,r,t){void 0===n&&(n=!0),void 0===r&&(r=!1),void 0===t&&(t=1),this.axisRotation(e,t,m.Z,[L.U,L.L,L.D,L.R],n,r)},n.safeSlices=function(e){return e>this.cubeSize?this.cubeSize:e},n.rTurn=function(e,n){void 0===n&&(n=1),this.rotateFace(L.R,e),this.xLayersRotation(this.cubeSize-n,e===Re.Clockwise,e===Re.Double,n)},n.lTurn=function(e,n){void 0===n&&(n=1),this.rotateFace(L.L,e),this.xLayersRotation(0,e===Re.CounterClockwise,e===Re.Double,n)},n.uTurn=function(e,n){void 0===n&&(n=1),this.rotateFace(L.U,e),this.yLayersRotation(0,e===Re.Clockwise,e===Re.Double,n)},n.dTurn=function(e,n){void 0===n&&(n=1),this.rotateFace(L.D,e),this.yLayersRotation(this.cubeSize-n,e===Re.CounterClockwise,e===Re.Double,n)},n.fTurn=function(e,n){void 0===n&&(n=1),this.rotateFace(L.F,e),this.zLayersRotation(this.cubeSize-n,e===Re.Clockwise,e===Re.Double,n)},n.bTurn=function(e,n){void 0===n&&(n=1),this.rotateFace(L.B,e),this.zLayersRotation(0,e===Re.CounterClockwise,e===Re.Double,n)},n.mTurn=function(e){this.cubeSize<2||this.xLayersRotation(1,e===Re.CounterClockwise,e===Re.Double,this.cubeSize-2)},n.eTurn=function(e){this.cubeSize<2||this.yLayersRotation(1,e===Re.CounterClockwise,e===Re.Double,this.cubeSize-2)},n.sTurn=function(e){this.cubeSize<2||this.zLayersRotation(1,e===Re.Clockwise,e===Re.Double,this.cubeSize-2)},n.xTurn=function(e){this.rotateFace(L.R,e),this.rotateFace(L.L,Te[e]),this.xLayersRotation(0,e===Re.Clockwise,e===Re.Double,this.cubeSize)},n.yTurn=function(e){this.rotateFace(L.U,e),this.rotateFace(L.D,Te[e]),this.yLayersRotation(0,e===Re.Clockwise,e===Re.Double,this.cubeSize)},n.zTurn=function(e){this.rotateFace(L.F,e),this.rotateFace(L.B,Te[e]),this.zLayersRotation(0,e===Re.Clockwise,e===Re.Double,this.cubeSize)},n.turn=function(e){var n=this.safeSlices(e.slices);switch(e.move){case F.F:this.fTurn(e.turnType,n);break;case F.B:this.bTurn(e.turnType,n);break;case F.U:this.uTurn(e.turnType,n);break;case F.D:this.dTurn(e.turnType,n);break;case F.R:this.rTurn(e.turnType,n);break;case F.L:this.lTurn(e.turnType,n);break;case F.M:this.mTurn(e.turnType);break;case F.E:this.eTurn(e.turnType);break;case F.S:this.sTurn(e.turnType);break;case F.X:this.xTurn(e.turnType);break;case F.Y:this.yTurn(e.turnType);break;case F.Z:this.zTurn(e.turnType);break;default:throw new Error("Unrecognized move in turn "+JSON.stringify(e))}},e}(),Ge=/([2-9]+)?([UuFfRrDdLlBbMESxyz])(w)?([2\'])?/g,Ie=((Be={})[Re.Clockwise]=Re.CounterClockwise,Be[Re.CounterClockwise]=Re.Clockwise,Be[Re.Double]=Re.Double,Be);function Pe(e){if(!e)return[];var n,r=[];do{if(n=Ge.exec(e)){var t=n[1],i=n[2],o=n[3],u=n[4]||S.Clockwise,c=i===i.toLowerCase()&&-1===z.indexOf(i);c&&(i=i.toUpperCase());var a={move:We(i),turnType:Ye(u),slices:c?2:Ae(t,o)};r.push(a)}}while(n);return r}function Ae(e,n){if(n&&!e)return 2;if(!n&&e)throw new Error("Invalid move: Cannot specify num slices if outer block move indicator 'w' is not present");return n||e?parseInt(e):1}function We(e){if(E.indexOf(e)<0)throw new Error("Invalid move ("+e+"): Possible turn faces are [U R F L D B M E S x y z]");return e}function Ye(e){switch(e){case S.Clockwise:return Re.Clockwise;case S.CounterClockwise:return Re.CounterClockwise;case S.Double:return Re.Double;default:throw new Error("Invalid move modifier ("+e+")")}}function Xe(e){for(var n=[],r=0;r<e.length;r++)n.push(y[e.charAt(r)]);return n}var je={cubeSize:3,width:128,height:128,viewportRotations:[[m.Y,45],[m.X,-34]],colorScheme:R,cubeColor:u.Black,cubeOpacity:100,stickerOpacity:100,dist:5,outlineWidth:.94,strokeWidth:0,viewbox:{x:-.9,y:-.9,width:1.8,height:1.8}};exports.CubeOptions=function(){},exports.CubeSvg=function(e){var n=function(e,n){var r;return"string"==typeof(r="string"==typeof n?function(e){var n={},r=function(e){for(var n={},r=(e.indexOf("?")>-1?e.substr(e.indexOf("?")+1):e).split("&"),t=0;t<r.length;t++){var i=r[t].split("=");n[decodeURIComponent(i[0])]=decodeURIComponent(i[1]||"")}return n}(e);return Object.keys(r).forEach(function(e){var t,i=r[e];switch(e){case"pzl":n.cubeSize=parseInt(i)||3;break;case"size":var o=parseInt(i)||250;n.width=o,n.height=o;break;case"view":n.view=i;break;case"stage":n.mask=i;break;case"r":n.viewportRotations=function(e){var n,r=/([xyz]-?[0-9][0-9]?[0-9]?)/g,t=[];do{if(n=r.exec(e)){var i=n[0],o=i.charAt(0),u=i.substr(1);t.push([B[o],parseInt(u)])}}while(n);return t}(i);break;case"alg":n.algorithm=i;break;case"case":n.case=i;break;case"fc":n.stickerColors=function(e){var n=[];if(e.indexOf(",")>-1)e.split(",").forEach(function(e){var r=G(e);r&&n.push(r)});else for(var r=0;r<e.length;r++)n.push(v[e.charAt(r)]);return n}(i);break;case"sch":n.colorScheme=(t=i).indexOf(",")>-1?function(e){var n={},r=e.split(",");return r.length<C.length?R:(C.forEach(function(e,t){if(r.length>t){var i=G(r[t]);i&&(n[e]=b[i]||i)}}),n)}(t):function(e){var n={};return e.length<C.length?R:(C.forEach(function(r,t){e.length>t&&(n[r]=v[e.charAt(t)])}),n)}(t);break;case"bg":n.backgroundColor=i;break;case"cc":n.cubeColor=i;break;case"co":n.cubeOpacity=parseInt(i)||100;break;case"fo":n.stickerOpacity=parseInt(i)||100;break;case"dist":n.dist=parseInt(i)||5;break;case"arw":n.arrows=i;break;case"fd":n.facelets=Xe(i);break;case"ac":console.warn("Currently param 'ac' is unsupported")}}),n}(n):n).facelets&&(r.facelets=Xe(r.facelets)),h({},e,r)}(je,e.extraOptions||{}),r=function(e){return"plan"===e.view&&(e.viewportRotations=[[m.X,-90]]),C.reduce(function(n,r){return n[r]=function(e,n){for(var r=function(e,n){for(var r=[],t=0;t<e;t++){r[t]=[];for(var i=0;i<n;i++)r[t][i]=null}return r}(n.cubeSize+1,n.cubeSize+1),t=0;t<=n.cubeSize;t++)for(var i=function(i){var o,u,c=x(e,n.cubeSize,t,i);c=U(c=O(c,[-n.cubeSize/2,-n.cubeSize/2,-n.cubeSize/2]),1/n.cubeSize),n.viewportRotations.forEach(function(e){c=M(c,e[0],Math.PI*e[1]/180)}),c=O(c,[0,0,n.dist]),r[t][i]=c=[(o=c)[0]*(u=n.dist)/o[2],o[1]*u/o[2],o[2]]},o=0;o<=n.cubeSize;o++)i(o);return r}(r,e),n},{})}(n);return n.stickerColors=function(e){var n=e.stickerColors,r=e.mask?function(e,n){var r;if(!De[e])throw new Error("invalid masking "+e);for(var t=n*n,i=((r={})[L.U]=[],r[L.F]=[],r[L.R]=[],r[L.D]=[],r[L.L]=[],r[L.B]=[],r),o=function(r){var t=Math.floor(r/n),o=r%n;C.forEach(function(r){i[r].push(De[e][r](t,o,n))})},u=0;u<t;u++)o(u);return i}(e.mask,e.cubeSize):null;if(r&&e.maskAlg){var t=new xe(e.cubeSize,r);Pe(e.maskAlg).forEach(function(e){t.turn(e)}),r=t.faces}n||(n=[].concat.apply([],C.map(function(n){return Array.apply(null,Array(e.cubeSize*e.cubeSize)).map(function(){return e.colorScheme[n]})})));var i=C.reduce(function(t,i){t[i]||(t[i]=[]);for(var c=0;c<e.cubeSize;c++)for(var a=0;a<e.cubeSize;a++){var s=C.indexOf(i)*(e.cubeSize*e.cubeSize)+(c*e.cubeSize+a);t[i][e.cubeSize*c+a]=n.length<=s?u.Black:n[s],r&&!r[i][e.cubeSize*c+a]&&(t[i][e.cubeSize*c+a]=o.DarkGray)}return t},{}),c=new xe(e.cubeSize,i),a=[];return e.case?a=Pe(e.case).map(function(e){return{turnType:Ie[e.turnType],move:e.move,slices:e.slices}}).reverse():e.algorithm&&(a=Pe(e.algorithm)),a.forEach(function(e){c.turn(e)}),[].concat.apply([],C.map(function(e){return c.faces[e].slice()}))}(n),f.createElement(me,{geometry:r,options:n})},exports.Masking={FL:"fl",F2L:"f2l",LL:"ll",CLL:"cll",ELL:"ell",OLL:"oll",OCLL:"ocll",OELL:"oell",COLL:"coll",OCELL:"ocell",WV:"wv",VH:"vh",ELS:"els",CLS:"cls",CMLL:"cmll",CROSS:"cross",F2L3:"f2l_3",F2L2:"f2l_2",F2LSM:"f2l_sm",F2L1:"f2l_1",F2B:"f2b",LINE:"line"};
//# sourceMappingURL=index.js.map
