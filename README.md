# Represent
Democracy only functions with an educated and engaged citizenry. 'Represent' is an open platform that seeks to empower citizens through education and a call to action when they can directly affect change in the system.

## Getting Started

Install Minikube. A tool to run a local Kubernetes cluster.
[Install Minikube](https://kubernetes.io/docs/setup/minikube/#installation)

Install Helm. A tool manage cluster dependencies and perform deployments and rollbacks.
[Install Helm](https://helm.sh/docs/using_helm/#installing-helm)

### Windows
1. Ensure Hyper-V is enabled.
2. Configure Virtual Switch ([guide](https://blogs.technet.microsoft.com/canitpro/2014/03/10/step-by-step-enabling-hyper-v-for-use-on-windows-8-1/))
3. Open PowerShell as Administrator.
4. Run:
```
minikube start --vm-driver=hyperv
```
5. Build Docker images
```
minikube docker-env
# Follow instructions to link cli to minikube's internal docker environment

docker build -t represent-api ./api
docker build -t represent-web ./web
```
6. Init Helm Tiller
```
helm init --history-max 200
```
7. Install Helm Chart
```
helm install app-chart -n represent
```
8. Add 'represent-app' hostname to /Windows/System/etc/hosts
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
**Solution:** https://stackoverflow.com/a/55546990