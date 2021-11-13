/**
 * 
 * @param {string} volume is the path that you wanna mirror inside the container 
 * @param {string} handler is the command that you wanna run inside the container
 * @returns The return of the provided shell script. 
 */
const docker_script = (volume,handler) => { 
  return `docker run --rm -v ${volume}:/documents node:14-alpine ${handler}`
}

export default docker_script;