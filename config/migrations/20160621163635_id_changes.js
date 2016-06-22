
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('github_users', function(table){
      table.increments()
      table.integer('github_id')
      table.text('login')
      table.text('password')
      table.text('avatar_url')
      table.text('gravatar_id')
      table.text('url')
      table.text('html_url')
      table.text('followers_url')
      table.text('following_url')
      table.text('gists_url')
      table.text('starred_url')
      table.text('subscriptions_url')
      table.text('organizations_url')
      table.text('repos_url')
      table.text('events_url')
      table.text('received_events_url')
      table.text('name')
      table.text('company')
      table.text('blog')
      table.text('location')
      table.text('email')
      table.text('hireable')
      table.text('bio')
      table.integer('public_repos')
      table.integer('public_gists')
      table.integer('followers')
      table.integer('following')
      table.text('bearer_token')
      table.text('jwt')
      table.text('created_at')
      table.text('updated_at')
    }),
    knex.schema.createTableIfNotExists('user_seleted_repos', function(table){
      table.increments()
      table.integer('github_id')
      table.json('selected_repos')
      table.text('created_at')
      table.text('updated_at')
    }),
    knex.schema.createTableIfNotExists('location_data', function(table){
      table.increments()
      table.integer('github_id')
      table.integer('longitude')
      table.integer('latitude')
      table.integer('altitude')
      table.integer('accuracy')
      table.integer('altitude_accuracy')
      table.integer('heading')
      table.integer('speed')
      table.integer('timestamp')
      table.integer('commit_hash')
      table.text('github_event_type')
      table.text('created_at')
      table.text('updated_at')
    }),
    knex.schema.createTableIfNotExists('github_webhooks', function(table){
      table.increments()
      table.integer('github_id')
      table.text('repo_full_name')
      table.text('list_hook_api_endpoint')
      table.text('create_hook_api_endpoint')
      table.text('repo_api_endpoint')
      table.text('webhook_event_type')
      table.text('created_at')
      table.text('updated_at')
    }),
    knex.schema.createTableIfNotExists('github_webhook_events', function(table){
      table.increments()
      table.integer('github_id')
      table.text('repo_full_name')
      table.text('webhook_event_type')
      table.json('webhook_event_payload')
      table.integer('timestamp_recieved')
      table.text('created_at')
      table.text('updated_at')
    })
  ])
}
exports.down = function(knex, Promise) {
  knex.schema.dropTable('github_users')
}
