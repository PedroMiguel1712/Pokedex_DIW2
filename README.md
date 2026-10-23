# Pokédex React + Vite

Pokédex interativa feita com **React + Vite**.

## Funcionalidades
- Lista dos 151 Pokémon com ID, nome, tipos e atributos (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed)
- Pesquisa por nome ou ID (atualiza enquanto digita)
- Filtro por tipo
- Detalhes do Pokémon em modal com barras de atributos
- Área de treinadores (insígnias e Pokémon de cada um)
- Mensagem quando nenhum Pokémon é encontrado
- Extras: favoritos (Supabase), comparação, ordenação, Pokémon aleatório, dark mode, layout responsivo

## Como executar
```bash
npm install
npm run dev
```
Abra no navegador: http://localhost:5173

## Dados
`src/data/pokedex-data.json` (pokémon, tipos e treinadores).

## Imagens (fontes externas)
- Pokémon: [PokéAPI sprites](https://github.com/PokeAPI/sprites) (official-artwork, via ID)
- Treinadores: [Pokémon Showdown trainer sprites](https://play.pokemonshowdown.com/sprites/trainers/) (com fallback para a inicial do nome)

## Favoritos com Supabase (requisito extra)
1. Crie um projeto em https://supabase.com
2. No SQL Editor, execute:
```sql
create table favoritos (
  pokemon_id int primary key,
  created_at timestamptz default now()
);
alter table favoritos enable row level security;
create policy "acesso publico" on favoritos for all using (true) with check (true);
```
3. Copie `.env.example` para `.env` e preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`
4. Reinicie `npm run dev`

Sem o `.env`, os favoritos são salvos no `localStorage`.

## Estrutura
```
src/
├── components/  Header, SearchBar, Filters, PokemonList, PokemonCard,
│                PokemonDetails, CompareModal, TrainerList, StatBar, TypeBadge
├── hooks/       useFavorites.js
├── lib/         supabase.js
├── utils/       helpers.js
├── data/        pokedex-data.json
├── App.jsx, main.jsx, index.css
```
