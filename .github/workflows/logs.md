## Case 1 : No Agents, nx-cloud record

{
"ciPipelineExecutionId": "68777613d95fc9332d8f3963",
"branch": "test",
"status": "FAILED",
"createdAt": 1752659475129,
"completedAt": 1752659475153,
"commitTitle": "Merge 58e1956e1e72c688686feee187ce7c0a50dfad3e into 8efc99622ebc98c27bef126a5b09fa335505ee8e",
"commitUrl": "https://github.com/MaxKless/self-healing-testing/pull/1",
"baseSha": null,
"headSha": "779cad7c19ddebc5e2168d56ebe315bf1f12600c",
"author": "MaxKless",
"authorAvatarUrl": "https://github.com/MaxKless.png",
"cipeUrl": "https://staging.nx.app/cipes/68777613d95fc9332d8f3963",
"runGroups": [
{
"runGroup": "16316202392-1",
"createdAt": 1752659475129,
"completedAt": 1752659475153,
"status": "FAILED",
"ciExecutionEnv": "",
"runs": [
{
"linkId": "JkaZIpDpAc",
"executionId": null,
"command": "nx-cloud record -- node -e throw \"error\"",
"status": "FAILED",
"runUrl": "https://staging.nx.app/runs/JkaZIpDpAc",
"numTasks": 1,
"numFailedTasks": 1,
"failedTasks": [
"nx-cloud-tasks-runner:record-command"
],
"createdAt": 1752659475096
}
],
"aiFix": null
}
]
}

## Case 2: No Agents, regular nx command

{
"ciPipelineExecutionId": "6877771bd95fc9332d8f3997",
"branch": "test",
"status": "IN_PROGRESS",
"createdAt": 1752659739381,
"completedAt": null,
"commitTitle": "Merge 0dc2695ec2e75aae32617ab7b5d3c88bff52ae46 into 8efc99622ebc98c27bef126a5b09fa335505ee8e",
"commitUrl": "https://github.com/MaxKless/self-healing-testing/pull/1",
"baseSha": null,
"headSha": "5327c428345ba082ca866928061dafbc8e0fcc8e",
"author": "MaxKless",
"authorAvatarUrl": "https://github.com/MaxKless.png",
"cipeUrl": "https://staging.nx.app/cipes/6877771bd95fc9332d8f3997",
"runGroups": [
{
"runGroup": "16316284717-1",
"createdAt": 1752659739381,
"completedAt": null,
"status": "IN_PROGRESS",
"ciExecutionEnv": "",
"runs": [
{
"linkId": "oj2bKtDn8A",
"executionId": null,
"command": "nx-cloud record -- node -e console.log(\"hello\")",
"status": "SUCCEEDED",
"runUrl": "https://staging.nx.app/runs/oj2bKtDn8A",
"numTasks": 1,
"numFailedTasks": 0,
"failedTasks": [],
"createdAt": 1752659739503
},
{
"linkId": "KhHzZsvyud",
"executionId": null,
"command": "nx affected -t lint test build e2e",
"status": "FAILED",
"runUrl": "https://staging.nx.app/runs/KhHzZsvyud",
"numTasks": 4,
"numFailedTasks": 2,
"failedTasks": [
"@self-healing-testing/self-healing-testing:build",
"@self-healing-testing/self-healing-testing:test"
],
"createdAt": 1752659747766
}
],
"aiFix": {
"aiFixId": "687777233b2f470df7f4598e",
"taskIds": [
"@self-healing-testing/self-healing-testing:build",
"@self-healing-testing/self-healing-testing:test"
],
"terminalLogsUrls": {
"@self-healing-testing/self-healing-testing:build": "https://storage.googleapis.com/staging-na/6870c606d08961ef93f52812/7c33091c-93db-4389-ade6-64d07034cd20-logs?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=na-staging-bucket-sa%40nxcloudstaging.iam.gserviceaccount.com%2F20250716%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250716T095648Z&X-Goog-Expires=18000&X-Goog-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%227c33091c-93db-4389-ade6-64d07034cd20-logs.tar.gz%22&X-Goog-Signature=7dc38b3d601be32622408e7e3ab9cc6c3c55f919121bd009ba680750784e2dab023552f7fe790a0eeed203d4f3cb622de404f3f988878282ab517128d16bbdfdaf0a5dfed39550a9e8528c3eeea076f0b6ee6cca39d5af280b5093ab7c5a4b37d15d78ba19d77ed7cb3975d2869c1b6be839af3d8960faf6b2d32e11b3aabae77ea4da6c9dcc5d85b866911c009d8040edff6ccb9e1e185563f3fe250fd638fc0b78678e85f455001f105d2af4dc10cd7cd7220c69d72bc1171566f12fe8ec0b4d4869290748924a3ed8f53eff2b2348385dc1d3125951d2700da5a05a54f61fa5fb546883982dc1556a9353a2ca00137f37be5b25aeba916714d70360244613",
"@self-healing-testing/self-healing-testing:test": "https://storage.googleapis.com/staging-na/6870c606d08961ef93f52812/3390bbf7-96aa-42d3-bcb0-c4ae94bbf28a-logs?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=na-staging-bucket-sa%40nxcloudstaging.iam.gserviceaccount.com%2F20250716%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250716T095648Z&X-Goog-Expires=18000&X-Goog-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%223390bbf7-96aa-42d3-bcb0-c4ae94bbf28a-logs.tar.gz%22&X-Goog-Signature=3b27d410fde98264efb099f1ac9c85e23f91f3fa8c1651ea5225a261572c4883737018a3b80eccba3567eb17ca5e7454f42b6e67005fbe27af79d114de7ca0b8155f50c52d8d3e268459f9fca118b229bf64f37aca85f6f24324ce511d85b50c729b714b43a3ed3ec5349891a35f19385de4e8abe936199b43fa20e1aaa2a1aedc14b0ac674d8e75fbf06dc8414ad3ef0b0538e16f7bcef65871a02465fe3aedcd4250099653c5c0029622c68bf47aedd5b3f680c24db072bfa61a360e4cfe7ba28b969d53fbfc2c7daa6f6b02d98218c9cacd0f7ab1afcf6722fd842e985793f31864cc8dd4b75026c0bf3143c10029cb3e1027f8cc478cc2d84e0f4a400252"
},
"suggestedFix": null,
"suggestedFixDescription": null,
"suggestedFixReasoning": null,
"suggestedFixStatus": "IN_PROGRESS",
"verificationStatus": "NOT_STARTED",
"userAction": "NONE"
}
}
]
}

## Case 3: Agents & fix-ci, regular nx command

forgot to copy, but no ai fix

## Case 4: Agents & fix-ci, nx-cloud record

{
"ciPipelineExecutionId": "687779593b2f470df7f45b3d",
"branch": "test",
"status": "FAILED",
"createdAt": 1752660313579,
"completedAt": 1752660466295,
"commitTitle": "throw error in nx-cloud-record w/ agents",
"commitUrl": "https://github.com/MaxKless/self-healing-testing/pull/1",
"baseSha": "8efc99622ebc98c27bef126a5b09fa335505ee8e",
"headSha": "cc73982f0fd9b24ca09274b172ec0a2977ca0118",
"author": "MaxKless",
"authorAvatarUrl": "https://avatars.githubusercontent.com/u/34165455?v=4",
"cipeUrl": "https://staging.nx.app/cipes/687779593b2f470df7f45b3d",
"runGroups": [
{
"runGroup": "16316529596-1",
"createdAt": 1752660313579,
"completedAt": 1752660466295,
"status": "FAILED",
"ciExecutionEnv": "",
"runs": [
{
"linkId": "JpfiQNL0VU",
"executionId": null,
"command": "nx-cloud record -- node -e throw \"error\"",
"status": "FAILED",
"runUrl": "https://staging.nx.app/runs/JpfiQNL0VU",
"numTasks": 1,
"numFailedTasks": 1,
"failedTasks": [
"nx-cloud-tasks-runner:record-command"
],
"createdAt": 1752660466228
}
],
"aiFix": null
}
]
}

## Case 5: Agents, nx-cloud record

{
"ciPipelineExecutionId": "68777a9098311b5105a7d185",
"branch": "test",
"status": "IN_PROGRESS",
"createdAt": 1752660624680,
"completedAt": null,
"commitTitle": "no fix-ci afterwards",
"commitUrl": "https://github.com/MaxKless/self-healing-testing/pull/1",
"baseSha": "8efc99622ebc98c27bef126a5b09fa335505ee8e",
"headSha": "d1ed67a48a26e5941c3f587bce4661997bf25dab",
"author": "MaxKless",
"authorAvatarUrl": "https://avatars.githubusercontent.com/u/34165455?v=4",
"cipeUrl": "https://staging.nx.app/cipes/68777a9098311b5105a7d185",
"runGroups": [
{
"runGroup": "16316645169-1",
"createdAt": 1752660624680,
"completedAt": null,
"status": "IN_PROGRESS",
"ciExecutionEnv": "",
"runs": [],
"aiFix": null
}
]
}

## Case 6: Agents, regular nx task
