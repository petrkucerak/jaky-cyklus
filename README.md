# Jaký je liturgicky cyklus

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/petrkucerak/jaky-cyklus)

Jednoduchá PWA aplikace, která řeší můj věčný problém: když mám na poslední chvíli najít žalm, nepamatuju si, jaký je liturgický cyklus. Apka běží plně offline, takže stačí stáhnout a jednou spustit, kvůli nacachování.

Aplikace běží na Next.js. O to, jak vypadá se stará Tailwind.

## Jak funguje algoritmus?

Spočítá celočíselný součet aktuálního roku. Přičte korektor. Ten se postará o problematiku toho, že církevní rok začíná během první adventní neděle. Ze získaného čísla získá modulo 3. Následně platí, že:

- 0 => cyklus C
- 1 => cyklus A
- 2 => cyklus B

## Commandy pro spuštěni

```
yarn
yarn dev
```
