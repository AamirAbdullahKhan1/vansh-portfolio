const CodeSnippets = () => {
    const snippets = [
      {
        id: 1,
        title: "Player Movement",
        code: "function movePlayer(x, y) {\n  player.position.x += x;\n  player.position.y += y;\n}",
      },
      {
        id: 2,
        title: "Enemy AI",
        code: "function updateEnemyAI() {\n  const distance = player.position.distanceTo(enemy.position);\n  if (distance < 10) {\n    enemy.attack();\n  }\n}",
      },
    ]
  
    return (
      <section id="code" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Code Snippets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {snippets.map((snippet) => (
              <div key={snippet.id} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{snippet.title}</h3>
                  <pre className="bg-gray-700 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{snippet.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default CodeSnippets
  