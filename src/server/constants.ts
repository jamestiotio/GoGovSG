export const DependencyIds = {
  urlRepository: Symbol.for('urlRepository'),
  urlMapper: Symbol.for('urlMapper'),
  userMapper: Symbol.for('userMapper'),
  otpMapper: Symbol.for('otpMapper'),
  analyticsLogging: Symbol.for('aLogging'),
  cookieReducer: Symbol.for('cookieReducer'),
  userRepository: Symbol.for('userRepository'),
  otpRepository: Symbol.for('otpRepository'),
  mailer: Symbol.for('mailer'),
  cryptography: Symbol.for('cryptography'),
  s3: Symbol.for('s3'),
  s3Bucket: Symbol.for('s3Bucket'),
  s3Client: Symbol.for('s3Client'),
  fileURLPrefix: Symbol.for('fileURLPrefix'),
  redirectService: Symbol.for('redirectService'),
  crawlerCheckService: Symbol.for('crawlerCheckService'),
  redirectController: Symbol.for('redirectController'),
}

export default DependencyIds