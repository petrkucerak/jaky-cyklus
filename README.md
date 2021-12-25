# Jaky je liturgicky culus

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/petrkucerak/jaky-cyklus)

Jednoduchá PWA aplikace, která řeší můj včný problém: když mám na poslední chvili najít žalm, nepamatuju si, jaký je liturgický cyklus. Apka běží plně offline, takže stačí stáhnout a jednou spustit, kvůli nachachování.

Aplikace běží na Next.js. O to, jak vypadá se stará TailWild. Confignul jsem i darkmode.

## Jak funguje alogoritmus?

Spočítá celočíslený součet aktuálního roku. Přičte korektor. Ten se postará o problematiku toho, že církvení rok začíná během první adventní neděle. Ze získaného čísla získá modluo 3. Následně platí, že:

- 0 => cyklus C
- 1 => cyklus A
- 2 => cyklus B

## Commandy pro spusteni

```
yarn
yarn dev
```
