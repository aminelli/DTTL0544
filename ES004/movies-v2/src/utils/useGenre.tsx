
   
  // The function now accepts an array of GenreType and returns a string
  const useGenre = (value: {id: number}[]): string => {
    if (value.length < 1) return "";
   
    const GenreIds: string[] = value.map((g) => g.id.toString());
    return GenreIds.reduce((acc: string, curr: string) => `${acc},${curr}`);
  };
   
  export default useGenre;