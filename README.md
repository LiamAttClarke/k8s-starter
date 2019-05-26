# Represent
A platform for enabling citizens and their representatives.

## Getting Started

Install Minikube. A tool to run a local Kubernetes cluster.
[Install Minikube](https://kubernetes.io/docs/setup/minikube/#installation)

### Windows
1. Ensure Hyper-V is enabled.
2. Configure Virtual Switch ([guide](https://blogs.technet.microsoft.com/canitpro/2014/03/10/step-by-step-enabling-hyper-v-for-use-on-windows-8-1/))
3. Open PowerShell as Administrator.
4. Run:
```
minikube start --vm-driver=hyperv
```

## Cheatsheet
```
# Get service url
minikube service web-service --url

# SSH into minikube vm
minikube ssh

# SSH into docker container running alpine image
docker ps # fetch docker container_id
docker exec -it <container_id> sh

# Install curl on alpine linux container
apk add curl

# Configure shell to use docker env within minikube
minikube docker-env
# Follow instrustions

# Read Pod logs
kubectl logs -f <pod_name>
```

## Known issues

**Issue:** Error message on Windows when trying to run `kubectl create`:
```error: SchemaError(io.k8s.api.extensions.v1beta1.PodSecurityPolicySpec): invalid object doesn't have additional properties```
**Solution:** https://stackoverflow.com/a/55546990