//Ici on gère les status, la mise en forme de la réponse et les appels aux fonctions des services
import UserService from '../services/user.service';

const test = async (req, res) => {
  console.log('Vu du controller :', req.body);

  const userServiceInstance = new UserService();

  return res.status(200).json({
    messageController: `Tu as post avec le nom ${req.body.name}`,
    messageService: await userServiceInstance.sayHelloToUser(req.body.name),
  });
};

export default {
  test,
};
