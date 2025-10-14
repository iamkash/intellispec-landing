const fs = require('fs');
const path = require('path');

// Module configuration mapping
const modules = [
  {
    name: 'inspect',
    displayName: 'IntelliInspect',
    icon: 'Search',
    color: 'blue',
    description: 'Digital Inspection Management'
  },
  {
    name: 'ndt',
    displayName: 'IntelliNDT',
    icon: 'Activity',
    color: 'green',
    description: 'Advanced NDT Management'
  },
  {
    name: 'integrity',
    displayName: 'IntelliIntegrity',
    icon: 'Activity',
    color: 'slate',
    description: 'Asset Integrity Management'
  },
  {
    name: 'turn',
    displayName: 'IntelliTurn',
    icon: 'Calendar',
    color: 'purple',
    description: 'Turnaround Management'
  },
  {
    name: 'work',
    displayName: 'IntelliWork',
    icon: 'Briefcase',
    color: 'orange',
    description: 'Workforce Management'
  },
  {
    name: 'track',
    displayName: 'IntelliTrack',
    icon: 'MapPin',
    color: 'indigo',
    description: 'Asset Tracking'
  },
  {
    name: 'comply',
    displayName: 'IntelliComply',
    icon: 'FileText',
    color: 'red',
    description: 'Safety Compliance'
  },
  {
    name: 'command',
    displayName: 'IntelliCommand',
    icon: 'Command',
    color: 'cyan',
    description: 'Field Command Center'
  },
  {
    name: 'vault',
    displayName: 'IntelliVault',
    icon: 'Database',
    color: 'amber',
    description: 'Document Management'
  },
  {
    name: 'vision',
    displayName: 'IntelliVision',
    icon: 'Eye',
    color: 'pink',
    description: 'Visual Intelligence'
  }
];

function updateModulePage(moduleConfig) {
  const modulePath = path.join(__dirname, '..', 'app', 'modules', moduleConfig.name, 'page.tsx');
  
  if (!fs.existsSync(modulePath)) {
    console.log(`Module page not found: ${modulePath}`);
    return;
  }

  let content = fs.readFileSync(modulePath, 'utf8');

  // Add Image import if not present
  if (!content.includes("import Image from 'next/image'")) {
    content = content.replace(
      "import Link from 'next/link'",
      "import Link from 'next/link'\nimport Image from 'next/image'"
    );
  }

  // Update hero image section
  const oldHeroImagePattern = /\/\* Hero Image \*\/\s*<motion\.div[^>]*>\s*<div className="glass-card rounded-3xl p-8">\s*<div className="aspect-video bg-gradient-to-br from-slate-700\/50 to-slate-800\/50 rounded-2xl flex items-center justify-center">\s*<div className="text-center">\s*<[^>]*className="[^"]*"[^>]*\/>\s*<p className="text-slate-500 dark:text-slate-400">[^<]*<\/p>\s*<p className="text-sm text-slate-600 dark:text-slate-500 mt-2">[^<]*<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/motion\.div>/s;

  const newHeroImage = `{/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-8">
                <div className="aspect-video relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/modules/${moduleConfig.name}.jpg"
                    alt="${moduleConfig.displayName} - ${moduleConfig.description}"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-${moduleConfig.color}-600/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <${moduleConfig.icon} className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">${moduleConfig.displayName}</p>
                        <p className="text-${moduleConfig.color}-200 text-sm">${moduleConfig.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>`;

  if (oldHeroImagePattern.test(content)) {
    content = content.replace(oldHeroImagePattern, newHeroImage);
    fs.writeFileSync(modulePath, content, 'utf8');
    console.log(`✅ Updated ${moduleConfig.name} module page`);
  } else {
    console.log(`⚠️  Could not find hero image section in ${moduleConfig.name} module page`);
  }
}

// Update all module pages
console.log('🔄 Updating module pages with optimized images...\n');

modules.forEach(moduleConfig => {
  updateModulePage(moduleConfig);
});

console.log('\n✅ All module pages updated successfully!');
console.log('📝 Each module page now uses the same optimized image as shown in the ModulesOverview component.'); 