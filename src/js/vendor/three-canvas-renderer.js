import * as THREE from "three";

/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.SpriteCanvasMaterial=function(e){THREE.Material.call(this),this.type="SpriteCanvasMaterial",this.color=new THREE.Color(16777215),this.program=function(e,t){},this.setValues(e)},THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype),THREE.SpriteCanvasMaterial.prototype.constructor=THREE.SpriteCanvasMaterial,THREE.SpriteCanvasMaterial.prototype.clone=function(){var e=new THREE.SpriteCanvasMaterial;return e.copy(this),e.color.copy(this.color),e.program=this.program,e},THREE.CanvasRenderer=function(e){function t(){xe.setRGB(0,0,0),ye.setRGB(0,0,0),ue.setRGB(0,0,0);for(var e=0,t=T.length;t>e;e++){var i=T[e],n=i.color;i instanceof THREE.AmbientLight?xe.add(n):i instanceof THREE.DirectionalLight?ye.add(n):i instanceof THREE.PointLight&&ue.add(n)}}function i(e,t,i){for(var n=0,o=T.length;o>n;n++){var r=T[n];if(Ee.copy(r.color),r instanceof THREE.DirectionalLight){var a=Re.setFromMatrixPosition(r.matrixWorld).normalize(),s=t.dot(a);if(0>=s)continue;s*=r.intensity,i.add(Ee.multiplyScalar(s))}else if(r instanceof THREE.PointLight){var a=Re.setFromMatrixPosition(r.matrixWorld),s=t.dot(Re.subVectors(a,e).normalize());if(0>=s)continue;if(s*=0==r.distance?1:1-Math.min(e.distanceTo(a)/r.distance,1),0==s)continue;s*=r.intensity,i.add(Ee.multiplyScalar(s))}}}function n(e,t,i){E(i.opacity),d(i.blending);var n=t.scale.x*I,o=t.scale.y*J,r=.5*Math.sqrt(n*n+o*o);if(ve.min.set(e.x-r,e.y-r),ve.max.set(e.x+r,e.y+r),i instanceof THREE.SpriteMaterial){var a=i.map;if(null!==a){var s=de[a.id];if((void 0===s||s.version!==a.version)&&(s=c(a),de[a.id]=s),void 0!==s.canvas){y(s.canvas);var l=a.image,p=l.width*a.offset.x,f=l.height*a.offset.y,h=l.width*a.repeat.x,m=l.height*a.repeat.y,v=n/h,u=o/m;$.save(),$.translate(e.x,e.y),0!==i.rotation&&$.rotate(i.rotation),$.translate(-n/2,-o/2),$.scale(v,u),$.translate(-p,-f),$.fillRect(p,f,h,m),$.restore()}}else y(i.color.getStyle()),$.save(),$.translate(e.x,e.y),0!==i.rotation&&$.rotate(i.rotation),$.scale(n,-o),$.fillRect(-.5,-.5,1,1),$.restore()}else i instanceof THREE.SpriteCanvasMaterial&&(x(i.color.getStyle()),y(i.color.getStyle()),$.save(),$.translate(e.x,e.y),0!==i.rotation&&$.rotate(i.rotation),$.scale(n,o),i.program($),$.restore())}function o(e,t,i,n){if(E(n.opacity),d(n.blending),$.beginPath(),$.moveTo(e.positionScreen.x,e.positionScreen.y),$.lineTo(t.positionScreen.x,t.positionScreen.y),n instanceof THREE.LineBasicMaterial){if(h(n.linewidth),m(n.linecap),v(n.linejoin),n.vertexColors!==THREE.VertexColors)x(n.color.getStyle());else{var o=i.vertexColors[0].getStyle(),r=i.vertexColors[1].getStyle();if(o===r)x(o);else{try{var a=$.createLinearGradient(e.positionScreen.x,e.positionScreen.y,t.positionScreen.x,t.positionScreen.y);a.addColorStop(0,o),a.addColorStop(1,r)}catch(s){a=o}x(a)}}$.stroke(),ve.expandByScalar(2*n.linewidth)}else n instanceof THREE.LineDashedMaterial&&(h(n.linewidth),m(n.linecap),v(n.linejoin),x(n.color.getStyle()),u([n.dashSize,n.gapSize]),$.stroke(),ve.expandByScalar(2*n.linewidth),u([]))}function r(e,t,n,o,r,c,f,h){if(N.info.render.vertices+=3,N.info.render.faces++,E(h.opacity),d(h.blending),M=e.positionScreen.x,b=e.positionScreen.y,L=t.positionScreen.x,B=t.positionScreen.y,P=n.positionScreen.x,z=n.positionScreen.y,a(M,b,L,B,P,z),(h instanceof THREE.MeshLambertMaterial||h instanceof THREE.MeshPhongMaterial)&&null===h.map)pe.copy(h.color),fe.copy(h.emissive),h.vertexColors===THREE.FaceColors&&pe.multiply(f.color),ce.copy(xe),Se.copy(e.positionWorld).add(t.positionWorld).add(n.positionWorld).divideScalar(3),i(Se,f.normalModel,ce),ce.multiply(pe).add(fe),h.wireframe===!0?s(ce,h.wireframeLinewidth,h.wireframeLinecap,h.wireframeLinejoin):l(ce);else if(h instanceof THREE.MeshBasicMaterial||h instanceof THREE.MeshLambertMaterial||h instanceof THREE.MeshPhongMaterial)if(null!==h.map){var m=h.map.mapping;m===THREE.UVMapping&&(V=f.uvs,p(M,b,L,B,P,z,V[o].x,V[o].y,V[r].x,V[r].y,V[c].x,V[c].y,h.map))}else null!==h.envMap?h.envMap.mapping===THREE.SphericalReflectionMapping&&(Te.copy(f.vertexNormalsModel[o]).applyMatrix3(ge),j=.5*Te.x+.5,W=.5*Te.y+.5,Te.copy(f.vertexNormalsModel[r]).applyMatrix3(ge),D=.5*Te.x+.5,F=.5*Te.y+.5,Te.copy(f.vertexNormalsModel[c]).applyMatrix3(ge),k=.5*Te.x+.5,A=.5*Te.y+.5,p(M,b,L,B,P,z,j,W,D,F,k,A,h.envMap)):(ce.copy(h.color),h.vertexColors===THREE.FaceColors&&ce.multiply(f.color),h.wireframe===!0?s(ce,h.wireframeLinewidth,h.wireframeLinecap,h.wireframeLinejoin):l(ce));else h instanceof THREE.MeshNormalMaterial?(Te.copy(f.normalModel).applyMatrix3(ge),ce.setRGB(Te.x,Te.y,Te.z).multiplyScalar(.5).addScalar(.5),h.wireframe===!0?s(ce,h.wireframeLinewidth,h.wireframeLinecap,h.wireframeLinejoin):l(ce)):(ce.setRGB(1,1,1),h.wireframe===!0?s(ce,h.wireframeLinewidth,h.wireframeLinecap,h.wireframeLinejoin):l(ce))}function a(e,t,i,n,o,r){$.beginPath(),$.moveTo(e,t),$.lineTo(i,n),$.lineTo(o,r),$.closePath()}function s(e,t,i,n){h(t),m(i),v(n),x(e.getStyle()),$.stroke(),ve.expandByScalar(2*t)}function l(e){y(e.getStyle()),$.fill()}function c(e){if(0===e.version||e instanceof THREE.CompressedTexture||e instanceof THREE.DataTexture)return{canvas:void 0,version:e.version};var t=e.image;if(t.complete===!1)return{canvas:void 0,version:0};var i=document.createElement("canvas");i.width=t.width,i.height=t.height;var n=i.getContext("2d");n.setTransform(1,0,0,-1,0,t.height),n.drawImage(t,0,0);var o=e.wrapS===THREE.RepeatWrapping,r=e.wrapT===THREE.RepeatWrapping,a="no-repeat";o===!0&&r===!0?a="repeat":o===!0?a="repeat-x":r===!0&&(a="repeat-y");var s=$.createPattern(i,a);return e.onUpdate&&e.onUpdate(e),{canvas:s,version:e.version}}function p(e,t,i,n,o,r,a,s,l,p,f,E,d){var h=de[d.id];if((void 0===h||h.version!==d.version)&&(h=c(d),de[d.id]=h),void 0===h.canvas)return y("rgba( 0, 0, 0, 1)"),void $.fill();y(h.canvas);var m,v,x,u,R,S,T,g,H=d.offset.x/d.repeat.x,w=d.offset.y/d.repeat.y,C=d.image.width*d.repeat.x,M=d.image.height*d.repeat.y;a=(a+H)*C,s=(s+w)*M,l=(l+H)*C,p=(p+w)*M,f=(f+H)*C,E=(E+w)*M,i-=e,n-=t,o-=e,r-=t,l-=a,p-=s,f-=a,E-=s,T=l*E-f*p,0!==T&&(g=1/T,m=(E*i-p*o)*g,v=(E*n-p*r)*g,x=(l*o-f*i)*g,u=(l*r-f*n)*g,R=e-m*a-x*s,S=t-v*a-u*s,$.save(),$.transform(m,v,x,u,R,S),$.fill(),$.restore())}function f(e,t,i){var n,o=t.x-e.x,r=t.y-e.y,a=o*o+r*r;0!==a&&(n=i/Math.sqrt(a),o*=n,r*=n,t.x+=o,t.y+=r,e.x-=o,e.y-=r)}function E(e){te!==e&&($.globalAlpha=e,te=e)}function d(e){ie!==e&&(e===THREE.NormalBlending?$.globalCompositeOperation="source-over":e===THREE.AdditiveBlending?$.globalCompositeOperation="lighter":e===THREE.SubtractiveBlending&&($.globalCompositeOperation="darker"),ie=e)}function h(e){re!==e&&($.lineWidth=e,re=e)}function m(e){ae!==e&&($.lineCap=e,ae=e)}function v(e){se!==e&&($.lineJoin=e,se=e)}function x(e){ne!==e&&($.strokeStyle=e,ne=e)}function y(e){oe!==e&&($.fillStyle=e,oe=e)}function u(e){le.length!==e.length&&($.setLineDash(e),le=e)}e=e||{};var R,S,T,g,H,w,C,M,b,L,B,P,z,V,j,W,D,F,k,A,N=this,G=new THREE.Projector,O=void 0!==e.canvas?e.canvas:document.createElement("canvas"),U=O.width,q=O.height,I=Math.floor(U/2),J=Math.floor(q/2),K=0,Q=0,X=U,Y=q,Z=1,$=O.getContext("2d",{alpha:e.alpha===!0}),_=new THREE.Color(0),ee=e.alpha===!0?0:1,te=1,ie=0,ne=null,oe=null,re=null,ae=null,se=null,le=[],ce=(new THREE.RenderableVertex,new THREE.RenderableVertex,new THREE.Color),pe=(new THREE.Color,new THREE.Color,new THREE.Color,new THREE.Color,new THREE.Color),fe=new THREE.Color,Ee=new THREE.Color,de={},he=new THREE.Box2,me=new THREE.Box2,ve=new THREE.Box2,xe=new THREE.Color,ye=new THREE.Color,ue=new THREE.Color,Re=new THREE.Vector3,Se=new THREE.Vector3,Te=new THREE.Vector3,ge=new THREE.Matrix3;void 0===$.setLineDash&&($.setLineDash=function(){}),this.domElement=O,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.info={render:{vertices:0,faces:0}},this.supportsVertexTextures=function(){},this.setFaceCulling=function(){},this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(e){void 0!==e&&(Z=e)},this.setSize=function(e,t,i){U=e*Z,q=t*Z,O.width=U,O.height=q,I=Math.floor(U/2),J=Math.floor(q/2),i!==!1&&(O.style.width=e+"px",O.style.height=t+"px"),he.min.set(-I,-J),he.max.set(I,J),me.min.set(-I,-J),me.max.set(I,J),te=1,ie=0,ne=null,oe=null,re=null,ae=null,se=null,this.setViewport(0,0,e,t)},this.setViewport=function(e,t,i,n){K=e*Z,Q=t*Z,X=i*Z,Y=n*Z},this.setScissor=function(){},this.setScissorTest=function(){},this.setClearColor=function(e,t){_.set(e),ee=void 0!==t?t:1,me.min.set(-I,-J),me.max.set(I,J)},this.setClearColorHex=function(e,t){console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."),this.setClearColor(e,t)},this.getClearColor=function(){return _},this.getClearAlpha=function(){return ee},this.getMaxAnisotropy=function(){return 0},this.clear=function(){me.isEmpty()===!1&&(me.intersect(he),me.expandByScalar(2),me.min.x=me.min.x+I,me.min.y=-me.min.y+J,me.max.x=me.max.x+I,me.max.y=-me.max.y+J,1>ee&&$.clearRect(0|me.min.x,0|me.max.y,me.max.x-me.min.x|0,me.min.y-me.max.y|0),ee>0&&(d(THREE.NormalBlending),E(1),y("rgba("+Math.floor(255*_.r)+","+Math.floor(255*_.g)+","+Math.floor(255*_.b)+","+ee+")"),$.fillRect(0|me.min.x,0|me.max.y,me.max.x-me.min.x|0,me.min.y-me.max.y|0)),me.makeEmpty())},this.clearColor=function(){},this.clearDepth=function(){},this.clearStencil=function(){},this.render=function(e,i){if(i instanceof THREE.Camera==!1)return void console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");this.autoClear===!0&&this.clear(),N.info.render.vertices=0,N.info.render.faces=0,$.setTransform(X/U,0,0,-Y/q,K,q-Q),$.translate(I,J),R=G.projectScene(e,i,this.sortObjects,this.sortElements),S=R.elements,T=R.lights,g=i,ge.getNormalMatrix(i.matrixWorldInverse),t();for(var a=0,s=S.length;s>a;a++){var l=S[a],c=l.material;if(void 0!==c&&0!==c.opacity){if(ve.makeEmpty(),l instanceof THREE.RenderableSprite)H=l,H.x*=I,H.y*=J,n(H,l,c);else if(l instanceof THREE.RenderableLine)H=l.v1,w=l.v2,H.positionScreen.x*=I,H.positionScreen.y*=J,w.positionScreen.x*=I,w.positionScreen.y*=J,ve.setFromPoints([H.positionScreen,w.positionScreen]),he.intersectsBox(ve)===!0&&o(H,w,l,c);else if(l instanceof THREE.RenderableFace){if(H=l.v1,w=l.v2,C=l.v3,H.positionScreen.z<-1||H.positionScreen.z>1)continue;if(w.positionScreen.z<-1||w.positionScreen.z>1)continue;if(C.positionScreen.z<-1||C.positionScreen.z>1)continue;H.positionScreen.x*=I,H.positionScreen.y*=J,w.positionScreen.x*=I,w.positionScreen.y*=J,C.positionScreen.x*=I,C.positionScreen.y*=J,c.overdraw>0&&(f(H.positionScreen,w.positionScreen,c.overdraw),f(w.positionScreen,C.positionScreen,c.overdraw),f(C.positionScreen,H.positionScreen,c.overdraw)),ve.setFromPoints([H.positionScreen,w.positionScreen,C.positionScreen]),he.intersectsBox(ve)===!0&&r(H,w,C,0,1,2,l,c)}me.union(ve)}}$.setTransform(1,0,0,1,0,0)}};
/**
 * @author mrdoob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author julianwa / https://github.com/julianwa
 */
THREE.RenderableObject=function(){this.id=0,this.object=null,this.z=0,this.renderOrder=0},THREE.RenderableFace=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.v3=new THREE.RenderableVertex,this.normalModel=new THREE.Vector3,this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3],this.vertexNormalsLength=0,this.color=new THREE.Color,this.material=null,this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2],this.z=0,this.renderOrder=0},THREE.RenderableVertex=function(){this.position=new THREE.Vector3,this.positionWorld=new THREE.Vector3,this.positionScreen=new THREE.Vector4,this.visible=!0},THREE.RenderableVertex.prototype.copy=function(e){this.positionWorld.copy(e.positionWorld),this.positionScreen.copy(e.positionScreen)},THREE.RenderableLine=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.vertexColors=[new THREE.Color,new THREE.Color],this.material=null,this.z=0,this.renderOrder=0},THREE.RenderableSprite=function(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new THREE.Vector2,this.material=null,this.renderOrder=0},THREE.Projector=function(){function e(){if(l===x){var e=new THREE.RenderableObject;return R.push(e),x++,l++,e}return R[l++]}function r(){if(p===T){var e=new THREE.RenderableVertex;return y.push(e),T++,p++,e}return y[p++]}function t(){if(u===g){var e=new THREE.RenderableFace;return H.push(e),g++,u++,e}return H[u++]}function n(){if(h===b){var e=new THREE.RenderableLine;return w.push(e),b++,h++,e}return w[h++]}function i(){if(v===S){var e=new THREE.RenderableSprite;return M.push(e),S++,v++,e}return M[v++]}function o(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.z!==r.z?r.z-e.z:e.id!==r.id?e.id-r.id:0}function a(e,r){var t=0,n=1,i=e.z+e.w,o=r.z+r.w,a=-e.z+e.w,s=-r.z+r.w;return i>=0&&o>=0&&a>=0&&s>=0?!0:0>i&&0>o||0>a&&0>s?!1:(0>i?t=Math.max(t,i/(i-o)):0>o&&(n=Math.min(n,i/(i-o))),0>a?t=Math.max(t,a/(a-s)):0>s&&(n=Math.min(n,a/(a-s))),t>n?!1:(e.lerp(r,t),r.lerp(e,1-n),!0))}var s,l,c,p,E,u,d,h,f,v,m,R=[],x=0,y=[],T=0,H=[],g=0,w=[],b=0,M=[],S=0,z={objects:[],lights:[],elements:[]},V=new THREE.Vector3,j=new THREE.Vector4,O=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),L=new THREE.Box3,C=new Array(3),k=(new Array(4),new THREE.Matrix4),N=new THREE.Matrix4,W=new THREE.Matrix4,B=new THREE.Matrix3,F=new THREE.Frustum,P=new THREE.Vector4,A=new THREE.Vector4;this.projectVector=function(e,r){console.warn("THREE.Projector: .projectVector() is now vector.project()."),e.project(r)},this.unprojectVector=function(e,r){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),e.unproject(r)},this.pickingRay=function(e,r){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")};var D=function(){function e(e){R=e,x=R.material,T.getNormalMatrix(R.matrixWorld),f.length=0,v.length=0}function i(e){var r=e.position,t=e.positionWorld,n=e.positionScreen;t.copy(r).applyMatrix4(m),n.copy(t).applyMatrix4(N);var i=1/n.w;n.x*=i,n.y*=i,n.z*=i,e.visible=n.x>=-1&&n.x<=1&&n.y>=-1&&n.y<=1&&n.z>=-1&&n.z<=1}function o(e,t,n){c=r(),c.position.set(e,t,n),i(c)}function a(e,r,t){f.push(e,r,t)}function s(e,r){v.push(e,r)}function l(e,r,t){return e.visible===!0||r.visible===!0||t.visible===!0?!0:(C[0]=e.positionScreen,C[1]=r.positionScreen,C[2]=t.positionScreen,O.intersectsBox(L.setFromPoints(C)))}function p(e,r,t){return(t.positionScreen.x-e.positionScreen.x)*(r.positionScreen.y-e.positionScreen.y)-(t.positionScreen.y-e.positionScreen.y)*(r.positionScreen.x-e.positionScreen.x)<0}function u(e,r){var t=y[e],i=y[r];d=n(),d.id=R.id,d.v1.copy(t),d.v2.copy(i),d.z=(t.positionScreen.z+i.positionScreen.z)/2,d.renderOrder=R.renderOrder,d.material=R.material,z.elements.push(d)}function h(e,r,n){var i=y[e],o=y[r],a=y[n];if(l(i,o,a)!==!1&&(x.side===THREE.DoubleSide||p(i,o,a)===!0)){E=t(),E.id=R.id,E.v1.copy(i),E.v2.copy(o),E.v3.copy(a),E.z=(i.positionScreen.z+o.positionScreen.z+a.positionScreen.z)/3,E.renderOrder=R.renderOrder,E.normalModel.fromArray(f,3*e),E.normalModel.applyMatrix3(T).normalize();for(var s=0;3>s;s++){var c=E.vertexNormalsModel[s];c.fromArray(f,3*arguments[s]),c.applyMatrix3(T).normalize();var u=E.uvs[s];u.fromArray(v,2*arguments[s])}E.vertexNormalsLength=3,E.material=R.material,z.elements.push(E)}}var f=[],v=[],R=null,x=null,T=new THREE.Matrix3;return{setObject:e,projectVertex:i,checkTriangleVisibility:l,checkBackfaceCulling:p,pushVertex:o,pushNormal:a,pushUv:s,pushLine:u,pushTriangle:h}},G=new D;this.projectScene=function(c,R,x,T){u=0,h=0,v=0,z.elements.length=0,c.autoUpdate===!0&&c.updateMatrixWorld(),null===R.parent&&R.updateMatrixWorld(),k.copy(R.matrixWorldInverse.getInverse(R.matrixWorld)),N.multiplyMatrices(R.projectionMatrix,k),F.setFromMatrix(N),l=0,z.objects.length=0,z.lights.length=0,c.traverseVisible(function(r){if(r instanceof THREE.Light)z.lights.push(r);else if(r instanceof THREE.Mesh||r instanceof THREE.Line||r instanceof THREE.Sprite){var t=r.material;if(t.visible===!1)return;(r.frustumCulled===!1||F.intersectsObject(r)===!0)&&(s=e(),s.id=r.id,s.object=r,V.setFromMatrixPosition(r.matrixWorld),V.applyProjection(N),s.z=V.z,s.renderOrder=r.renderOrder,z.objects.push(s))}}),x===!0&&z.objects.sort(o);for(var H=0,g=z.objects.length;g>H;H++){var w=z.objects[H].object,b=w.geometry;if(G.setObject(w),m=w.matrixWorld,p=0,w instanceof THREE.Mesh){if(b instanceof THREE.BufferGeometry){var M=b.attributes,S=b.groups;if(void 0===M.position)continue;for(var O=M.position.array,L=0,C=O.length;C>L;L+=3)G.pushVertex(O[L],O[L+1],O[L+2]);if(void 0!==M.normal)for(var D=M.normal.array,L=0,C=D.length;C>L;L+=3)G.pushNormal(D[L],D[L+1],D[L+2]);if(void 0!==M.uv)for(var I=M.uv.array,L=0,C=I.length;C>L;L+=2)G.pushUv(I[L],I[L+1]);if(null!==b.index){var U=b.index.array;if(S.length>0)for(var H=0;H<S.length;H++)for(var q=S[H],L=q.start,C=q.start+q.count;C>L;L+=3)G.pushTriangle(U[L],U[L+1],U[L+2]);else for(var L=0,C=U.length;C>L;L+=3)G.pushTriangle(U[L],U[L+1],U[L+2])}else for(var L=0,C=O.length/3;C>L;L+=3)G.pushTriangle(L,L+1,L+2)}else if(b instanceof THREE.Geometry){var J=b.vertices,K=b.faces,Q=b.faceVertexUvs[0];B.getNormalMatrix(m);for(var X=w.material,Y=X instanceof THREE.MultiMaterial,Z=Y===!0?w.material:null,$=0,_=J.length;_>$;$++){var ee=J[$];if(V.copy(ee),X.morphTargets===!0)for(var re=b.morphTargets,te=w.morphTargetInfluences,ne=0,ie=re.length;ie>ne;ne++){var oe=te[ne];if(0!==oe){var ae=re[ne],se=ae.vertices[$];V.x+=(se.x-ee.x)*oe,V.y+=(se.y-ee.y)*oe,V.z+=(se.z-ee.z)*oe}}G.pushVertex(V.x,V.y,V.z)}for(var le=0,ce=K.length;ce>le;le++){var pe=K[le];if(X=Y===!0?Z.materials[pe.materialIndex]:w.material,void 0!==X){var Ee=X.side,ue=y[pe.a],de=y[pe.b],he=y[pe.c];if(G.checkTriangleVisibility(ue,de,he)!==!1){var fe=G.checkBackfaceCulling(ue,de,he);if(Ee!==THREE.DoubleSide){if(Ee===THREE.FrontSide&&fe===!1)continue;if(Ee===THREE.BackSide&&fe===!0)continue}E=t(),E.id=w.id,E.v1.copy(ue),E.v2.copy(de),E.v3.copy(he),E.normalModel.copy(pe.normal),fe!==!1||Ee!==THREE.BackSide&&Ee!==THREE.DoubleSide||E.normalModel.negate(),E.normalModel.applyMatrix3(B).normalize();for(var ve=pe.vertexNormals,me=0,Re=Math.min(ve.length,3);Re>me;me++){var xe=E.vertexNormalsModel[me];xe.copy(ve[me]),fe!==!1||Ee!==THREE.BackSide&&Ee!==THREE.DoubleSide||xe.negate(),xe.applyMatrix3(B).normalize()}E.vertexNormalsLength=ve.length;var ye=Q[le];if(void 0!==ye)for(var Te=0;3>Te;Te++)E.uvs[Te].copy(ye[Te]);E.color=pe.color,E.material=X,E.z=(ue.positionScreen.z+de.positionScreen.z+he.positionScreen.z)/3,E.renderOrder=w.renderOrder,z.elements.push(E)}}}}}else if(w instanceof THREE.Line){if(b instanceof THREE.BufferGeometry){var M=b.attributes;if(void 0!==M.position){for(var O=M.position.array,L=0,C=O.length;C>L;L+=3)G.pushVertex(O[L],O[L+1],O[L+2]);if(null!==b.index)for(var U=b.index.array,L=0,C=U.length;C>L;L+=2)G.pushLine(U[L],U[L+1]);else for(var He=w instanceof THREE.LineSegments?2:1,L=0,C=O.length/3-1;C>L;L+=He)G.pushLine(L,L+1)}}else if(b instanceof THREE.Geometry){W.multiplyMatrices(N,m);var J=w.geometry.vertices;if(0===J.length)continue;ue=r(),ue.positionScreen.copy(J[0]).applyMatrix4(W);for(var He=w instanceof THREE.LineSegments?2:1,$=1,_=J.length;_>$;$++)ue=r(),ue.positionScreen.copy(J[$]).applyMatrix4(W),($+1)%He>0||(de=y[p-2],P.copy(ue.positionScreen),A.copy(de.positionScreen),a(P,A)===!0&&(P.multiplyScalar(1/P.w),A.multiplyScalar(1/A.w),d=n(),d.id=w.id,d.v1.positionScreen.copy(P),d.v2.positionScreen.copy(A),d.z=Math.max(P.z,A.z),d.renderOrder=w.renderOrder,d.material=w.material,w.material.vertexColors===THREE.VertexColors&&(d.vertexColors[0].copy(w.geometry.colors[$]),d.vertexColors[1].copy(w.geometry.colors[$-1])),z.elements.push(d)))}}else if(w instanceof THREE.Sprite){j.set(m.elements[12],m.elements[13],m.elements[14],1),j.applyMatrix4(N);var ge=1/j.w;j.z*=ge,j.z>=-1&&j.z<=1&&(f=i(),f.id=w.id,f.x=j.x*ge,f.y=j.y*ge,f.z=j.z,f.renderOrder=w.renderOrder,f.object=w,f.rotation=w.rotation,f.scale.x=w.scale.x*Math.abs(f.x-(j.x+R.projectionMatrix.elements[0])/(j.w+R.projectionMatrix.elements[12])),f.scale.y=w.scale.y*Math.abs(f.y-(j.y+R.projectionMatrix.elements[5])/(j.w+R.projectionMatrix.elements[13])),f.material=w.material,z.elements.push(f))}}return T===!0&&z.elements.sort(o),z}};


export default THREE