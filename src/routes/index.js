import ExecuteCommandService from "../services/ExecuteCommandService.js";

const router = (path, data) => {
  const spawnCommand = new ExecuteCommandService();

  const routes = {
    ["/execute"]: spawnCommand.execute,
  }

  const controller = routes[path];

  if (controller) return controller(data);
}

export default router;