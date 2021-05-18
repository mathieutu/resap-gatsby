import { CreateBabelConfigArgs } from 'gatsby'

exports.onCreateBabelConfig = ({ actions }: CreateBabelConfigArgs) => {
  actions.setBabelPreset({ name: 'babel-preset-gatsby', options: { reactRuntime: 'automatic' } })
}
