"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[447,875,961,279,860,765],{9875:(u,c,r)=>{r.d(c,{v:()=>a});var i=r(1571),p=r(529),s=r(9961);class a{constructor(t,n){this.http=t,this.httpService=n,this.API="https://apiscrapper.intelliassist.co/walkinapp/api"}getSlotMachine(t,n,o){return this.http.get(`${this.API}/slotMachine/getCode?phone=${t}&orgId=248&slots=${o[0]},${o[1]},${o[2]}`)}getApiData(t){return this.httpService.post(`${this.API}/hiresvc/findHiringRequirementByWalkinId`,t)}getInstaPhotos(){return this.http.get(`${this.API}/instagramService/getInstaTags?instaPageId=17841449142984180`)}}a.\u0275fac=function(t){return new(t||a)(i.LFG(p.eN),i.LFG(s.E))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},9961:(u,c,r)=>{r.d(c,{E:()=>s});var i=r(529),p=r(1571);class s{constructor(e){this.http=e}getString(e){let t=[];for(let n in e){let o=encodeURIComponent(e[n].toString());t.push([n,o].join("="))}return t.join("&")}postStringHold(e){var t=new i.LE;for(let n in e){let o=encodeURIComponent(e[n].toString());t=t.append(n,o)}return t}postString(e){var t=new FormData;for(let n in e){let o=encodeURIComponent(e[n].toString());t.append(n,o)}return t}toFormData(e){const t=new FormData;for(const n of Object.keys(e))t.append(n,e[n]);return t}get(e,t,n){return this.http.get(e+"?"+this.getString(t),n)}post(e,t,n){return this.http.post(e,t,n)}put(e,t,n){return this.http.put(e,t,n)}delete(e,t){console.log(e,t);const n={headers:new i.WM({"Content-Type":"application/json"}),body:t};return this.http.delete(e,n)}postform(e,t,n){return t=this.postString(t),this.http.post(e,t,n)}upload(e,t,n){const o=new FormData;for(const h of Object.keys(t))o.append(h,t[h]);return this.http.post(e,o)}}s.\u0275fac=function(e){return new(e||s)(p.LFG(i.eN))},s.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}}]);