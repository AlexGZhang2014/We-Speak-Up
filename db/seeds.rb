# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.create(title: "First title", content: "Lorem ipsum dolor amet fashion axe green juice paleo irony, vape you probably haven't heard of them sartorial retro ethical semiotics meh subway tile VHS jean shorts. Hot chicken woke ethical celiac raw denim synth vaporware. Banjo kinfolk kitsch, yr bicycle rights craft beer tacos poke. Hot chicken typewriter helvetica keytar, everyday carry cliche church-key small batch artisan tote bag prism twee +1 ramps retro. Cred YOLO kickstarter umami messenger bag selvage whatever poutine synth kombucha twee actually distillery yr. Hella whatever echo park occupy man braid, hashtag biodiesel truffaut pop-up tacos shabby chic retro wayfarers lo-fi.", author: "SomeDude")

Post.create(title: "Second title", content: "Godard irony vegan etsy pour-over hexagon banh mi. Farm-to-table celiac chartreuse ethical, cliche chillwave before they sold out kale chips messenger bag tattooed marfa wolf hell of gluten-free pok pok. Wolf meggings austin skateboard try-hard vinyl, glossier salvia shaman gastropub stumptown. Kale chips taxidermy semiotics distillery quinoa humblebrag vaporware heirloom taiyaki banjo typewriter lomo. Banjo celiac narwhal aesthetic kombucha shaman health goth woke.", author: "OtherGuy")

Comment.create(content: "That is huge", author: "Somedude", post_id: 1)
Comment.create(content: "Wow are you okay?", author: "ConcernedPerson", post_id: 1)
Comment.create(content: "Yeah I agree", author: "ThatLady78", post_id: 2)
Comment.create(content: "Constantly shaken", author: "FamousDude", post_id: 2)
