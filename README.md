# Represent
Democracy only functions with an educated and engaged citizenry. 'Represent' is an open platform that seeks to empower citizens through education and a call to action when they can directly affect change in the system.

## Getting Started

1. Install dependencies

Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)

Install [Minikube](https://kubernetes.io/docs/setup/minikube/#installation). A tool to run a local Kubernetes cluster.

Install [Helm](https://helm.sh/docs/using_helm/#installing-helm). A tool for managing cluster dependencies and perform deployments and rollbacks.

Install [Skaffold](https://skaffold.dev/). Skaffold is a command line tool that facilitates continuous development for Kubernetes applications. You can iterate on your application source code locally then deploy to local or remote Kubernetes clusters.

2. Start local K8 cluster (Windows: run PowerShell as Admin):
```
minikube start --vm-driver=virtualbox
```
3. Init Helm Tiller, A K8 Pod that manages the deployment of containers to the cluster.
```
helm init --history-max 200
```
7. Build and deploy containers to local cluster. After deploying the containers Skaffold will watch source code directories for changes and deploy them automatically.
```
skaffold dev
```
8. Add 'represent-app' hostname to /Windows/System32/drivers/etc/hosts
```
minikube status # get minikube IP address
# Then add the following line to your hosts file:
<minikube_ip> represent-app
```
9. Finally, access the site by visiting http://represent-app in your browser.

## Cheatsheet
```
# Get service url
minikube service web-service --url

# Connect Docker CLI to Minikube docker instance
minikube docker-env
# Follow directions

# SSH into docker container running alpine image
docker ps # fetch docker container_id
docker exec -it <container_id> sh

# Install curl on alpine linux container
apk add curl

# Read Pod logs
kubectl get pods -n represent
kubectl logs -f <pod_name>
```

## Known issues

**Issue:** Error message on Windows when trying to run `kubectl create`:
```error: SchemaError(io.k8s.api.extensions.v1beta1.PodSecurityPolicySpec): invalid object doesn't have additional properties```
This may be caused by version mismatch of kubectl which Docker for Desktop installs
**Solution 1:** Resolve version mismatch: https://stackoverflow.com/a/55546990
**Solution 2:** Uninstall Docker for Desktop and only install the Docker CLI: https://stackoverflow.com/a/43594065