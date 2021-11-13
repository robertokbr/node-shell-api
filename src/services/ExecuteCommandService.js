import { spawn } from 'child_process';
import paths from '../configs/paths.cjs';
import docker_script from '../utils/docker-script.js';

export default class ExecuteCommandService {
  async execute({ command }) {  
    const docker_command = docker_script(
      paths.documents,
      command || 'echo "No command provided!"'
    );

    const { stdout, stderr } = spawn(docker_command, { shell: true });

    const handleResponse = (data) => {
      return data.toString().split('\n').filter(r => !!r);
    }

    for await(const response of stdout) {
      if (response)
        return handleResponse(response);
    }

    for await (const error of stderr) {
      if (error)
        return error.toString();
    }
  }
}

