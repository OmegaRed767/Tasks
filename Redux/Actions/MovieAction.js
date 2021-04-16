export const Add_Movie = data => {
  return {
    type: 'add',
    data: data,
  };
};
export const Remove_Movied = id => {
  return {
    type: 'remove',
    movie_id: id,
  };
};
export const Refresh = () => {
  return {
    type: 'refresh',
  };
};
