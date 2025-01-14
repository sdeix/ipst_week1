async function fetchfunc(): Promise<any> {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
      );
      const data = await response.json();
  
      if (!response.ok) throw new Error();
      
      return data;
    } catch {
      throw new Error();
    }
  }
  fetchfunc()
    .then((data) => console.log("Данные:", data))
    .catch(() => console.error("Ошибка при загрузке данных"));