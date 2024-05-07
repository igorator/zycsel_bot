const { InputMediaBuilder } = require('grammy');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const renderChannelPosts = async (ctx) => {
  ctx.replyWithMediaGroup();
};
module.exports = { renderChannelPosts };
