import React from 'react'

const page = () => {
  return (
    <div>
      <section id="about" className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission in Action</h2>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At FoodShare, we're revolutionizing the way communities think about food distribution. We believe in a world where surplus food becomes a resource, not waste, and where every neighborhood has access to fresh, nutritious meals. Our innovative platform connects food donors directly with local communities, creating a sustainable cycle of giving that strengthens our social fabric.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Together with restaurants, grocery stores, and caring individuals, we're building a movement that transforms food rescue into community empowerment. By combining technology with compassion, we're creating an efficient, scalable solution that makes food donation as simple as a few clicks. Join us in writing the next chapter of community care and environmental responsibility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
        </div>


      </section>

    </div>
  )
}

export default page
