export const player = {
  nick: "",
  id: "",
  whatsapp: "",
  email: "",
  kills: 0,
  mortes: 0
};

const SquadModel = {
  nome: "",
  num_players: 0,
  vitorias: 0,
  pontos: 0,
  kills: 0,
  mortes: 0,
  num_jogos: 0,
  players: new Array(5).fill(player)
};

export default SquadModel;
