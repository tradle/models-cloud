const models = module.exports = {
  get ['tradle.GraphQLQuery']() { return require('./models/tradle.GraphQLQuery.json') },
  get ['tradle.IotSession']() { return require('./models/tradle.IotSession.json') },
  get ['tradle.MyCloudFriend']() { return require('./models/tradle.MyCloudFriend.json') },
  get ['tradle.cloud.AWSRegion']() { return require('./models/tradle.cloud.AWSRegion.json') },
  get ['tradle.cloud.ChildDeployment']() { return require('./models/tradle.cloud.ChildDeployment.json') },
  get ['tradle.cloud.Configuration']() { return require('./models/tradle.cloud.Configuration.json') },
  get ['tradle.cloud.Deployment']() { return require('./models/tradle.cloud.Deployment.json') },
  get ['tradle.cloud.MyDeployment']() { return require('./models/tradle.cloud.MyDeployment.json') },
  get ['tradle.cloud.ParentDeployment']() { return require('./models/tradle.cloud.ParentDeployment.json') },
  get ['tradle.cloud.ReleaseChannel']() { return require('./models/tradle.cloud.ReleaseChannel.json') },
  get ['tradle.cloud.TmpSNSTopic']() { return require('./models/tradle.cloud.TmpSNSTopic.json') },
  get ['tradle.cloud.Update']() { return require('./models/tradle.cloud.Update.json') },
  get ['tradle.cloud.UpdateRequest']() { return require('./models/tradle.cloud.UpdateRequest.json') },
  get ['tradle.cloud.UpdateResponse']() { return require('./models/tradle.cloud.UpdateResponse.json') },
  get ['tradle.cloud.VersionInfo']() { return require('./models/tradle.cloud.VersionInfo.json') }
}