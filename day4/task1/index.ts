function cleanUserData(users: User[]): cleanUser[] {
    const newusers: cleanUser[] = [];
  
    if (Math.random() < 0.1) throw new Error();
  
    for (let i = 0; i < users.length; i++) {
      if (!users[i].isActive) continue;
  
      newusers.push({
        name: users[i].name.replace(/\s+/g, "").toLowerCase(),
        email: users[i].email.toLowerCase(),
        isActive: true,
      });
    }
    return newusers;
  }
  
  type User = {
    name: string;
    email: string;
    isActive: boolean;
  };
  type cleanUser = {
    name: string;
    email: string;
    isActive: true;
  };
  
  const users: User[] = [
    {
      name: "NAME1",
      email: "NAME1@example.com",
      isActive: true,
    },
    {
      name: "Na me 2",
      email: "name2@example.com",
      isActive: false,
    },
    {
      name: "Na m e3",
      email: "name3@example.com",
      isActive: true,
    },
    {
      name: "name4",
      email: "name4@example.com",
      isActive: false,
    },
    {
      name: "name5",
      email: "name5@example.com",
      isActive: false,
    },
    {
      name: "na  m  e6",
      email: "name6@EXample.com",
      isActive: true,
    },
  ];
  
  try {
    console.log(cleanUserData(users));
  } catch {
    console.error("Произошли ошибки");
  }
  