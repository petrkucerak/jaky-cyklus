# Jaky je liturgicky culus

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/petrkucerak/jaky-cyklus)

Jednoducha PWA aplikace, ktera resi muj vecny problem: nepamatuju si, jaky je litrugicky rok, kdyz mam hledat zalm na kuru. Jo, bezi plne offline.

## Jak funguje alogoritmus?

Spocita ciselny soucet dnesniho dne. Pricte korekotr, (zdali uz zacal cirkevni rok. Tj. je-li po 1. adventni nedeli). Cislo ziska modulo 3. Nasledne plati, ze:

- 0 => cyklus C
- 1 => cyklus A
- 2 => cyklus B

## Commandy pro spusteni

```
yarn
yarn dev
```
