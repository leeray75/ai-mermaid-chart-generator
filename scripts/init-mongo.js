db = db.getSiblingDB('ai-mermaid'); // Switch to or create 'ai-mermaid' database

// Optional: Create a collection or insert a sample document to trigger DB creation
db.createCollection('sampleCollection');
db.sampleCollection.insert({ name: 'sample', value: 'data' });

print('ai-mermaid database initialized!');
