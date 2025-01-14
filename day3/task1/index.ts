function delayPromise(delay: number, message: string): Promise<string> {
    return new Promise((resolve,reject) => {
      delay<0?reject("delay должно быть больше 0"):null;
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
  
  
delayPromise(2000, "Сообщение")
.then((msg) => console.log(msg))
.catch((err) => console.error("Ошибка:", err));
  