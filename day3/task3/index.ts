type User = {
    id: number;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: "active" | "delete";
  };
  
  const users: User[] = [
    {
      id: 1,
      name: "name1",
      phone: "1234567890",
      email: "name1@example.com",
      location: "tomsk",
      status: "active",
    },
    {
      id: 2,
      name: "name2",
      phone: "2234567890",
      email: "name2@example.com",
      location: "omsk",
      status: "active",
    },
    {
      id: 3,
      name: "name3",
      phone: "3234567890",
      email: "name3@example.com",
      location: "moscow",
      status: "delete",
    },
  ];
  
  function fakefetch(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 2000);
    });
  }
  
  async function getUsers() {
    try {
      const users = await fakefetch();
      console.log("Информация о пользователях:", users);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }
  
  getUsers();
  